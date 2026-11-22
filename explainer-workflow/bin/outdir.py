"""Where generated files go. Nothing generated is kept inside a project folder.

Every build output (review stills, check frames, sheets, covers, 简介.txt drafts,
videos and the Remotion bundle) goes under <repo>/out/, mirroring the series
path without the projects/ level:

    <repo>/biology/selective-2/projects/xb2-01  ->  <repo>/out/biology/selective-2/xb2-01
    <repo>/biology/selective-2 (series)         ->  <repo>/out/biology/selective-2

<repo>/out/ is in .gitignore. Remotion uses the single Chrome in the shared
<repo>/node_modules (--browser-executable), and webpack caching is off
(--bundle-cache=false), so nothing is written into a project's own folder.

    python3 bin/outdir.py <project-or-series-dir>   print the output folder (and create it)
    python3 bin/outdir.py --browser                 print the shared Chrome path
    python3 bin/outdir.py --root                    print the repository root
"""
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, 'out')
BROWSER = os.path.join(ROOT, 'node_modules', '.remotion', 'chrome-headless-shell', 'linux64',
                       'chrome-headless-shell-linux64', 'chrome-headless-shell')


def out_dir(path, create=True):
	path = os.path.abspath(os.path.expanduser(path))
	rel = os.path.relpath(path, ROOT)
	if rel.startswith('..'):
		rel = os.path.join('_external', os.path.basename(path))
	parts = [p for p in rel.split(os.sep) if p != 'projects']
	d = os.path.join(OUT, *parts)
	if create:
		os.makedirs(d, exist_ok=True)
	return d


def remotion_flags():
	"""Flags for every `remotion render/still` call."""
	return [f'--browser-executable={BROWSER}'] if os.path.exists(BROWSER) else []


if __name__ == '__main__':
	arg = sys.argv[1]
	print(BROWSER if arg == '--browser' else ROOT if arg == '--root' else out_dir(arg))
