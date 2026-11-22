"""Cross-process locks, so several agents working in parallel do not hammer a
web service or overload this small machine (2 CPUs, 3 GB RAM).

    from netlock import throttle, exclusive
    with throttle('commons', 4):   # at most one request every 4 s, across all processes
        ...
    with exclusive('render'):      # only one Remotion render at a time
        ...

Lock files live in <repo>/out/.locks/ (out/ is not in git). From a shell:
    python3 bin/netlock.py render -- <command> ...   runs the command while holding the lock
"""
import contextlib
import fcntl
import os
import subprocess
import sys
import time

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DIR = os.path.join(ROOT, 'out', '.locks')


@contextlib.contextmanager
def exclusive(name):
	os.makedirs(DIR, exist_ok=True)
	with open(os.path.join(DIR, name + '.lock'), 'a+') as f:
		fcntl.flock(f, fcntl.LOCK_EX)
		try:
			yield
		finally:
			fcntl.flock(f, fcntl.LOCK_UN)


@contextlib.contextmanager
def throttle(name, interval):
	"""Serialise requests to one service and keep `interval` seconds between them."""
	with exclusive(name):
		stamp = os.path.join(DIR, name + '.last')
		try:
			last = float(open(stamp).read())
		except (OSError, ValueError):
			last = 0
		wait = last + interval - time.time()
		if wait > 0:
			time.sleep(wait)
		try:
			yield
		finally:
			open(stamp, 'w').write(str(time.time()))


if __name__ == '__main__':
	name = sys.argv[1]
	cmd = sys.argv[sys.argv.index('--') + 1:]
	with exclusive(name):
		sys.exit(subprocess.call(cmd))
