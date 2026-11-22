"""Marks an episode ✅ in the episode list and records its video path and length.
The list is ~/gaokao-courseware-projectfile/biology/selective-1/list.md unless EPISODE_LIST points elsewhere.

    python3 bin/mark-done.py <ID> <video-path>
"""
import os
import re
import subprocess
import sys

ep, video = sys.argv[1], sys.argv[2]
path = os.path.expanduser(os.environ.get('EPISODE_LIST', '~/gaokao-courseware-projectfile/biology/selective-1/list.md'))
# The one shared node_modules lives at the repository root (two levels above explainer-workflow/bin).
remotion = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), 'node_modules', '.bin', 'remotion')
secs = float(subprocess.check_output([remotion, 'ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', video]))
length = f'{int(secs // 60)}:{int(secs % 60):02d}'
shown = video.replace(os.path.expanduser('~'), '~')

text = open(path, encoding='utf8').read()
# Summary table row.
text = re.sub(rf'^(\| {re.escape(ep)} \|.*\| )[⬜🛠]( \|)$', r'\1✅\2', text, flags=re.M)
# Section heading, plus the file line under it (replaced if already there).
text = re.sub(rf'^(### {re.escape(ep)}\b.*)[⬜🛠]\n((?:已完成|工程)：.*\n)?', rf'\1✅\n已完成：`{shown}`（{length}）\n', text, flags=re.M)
done = len(re.findall(r'^\| [A-Z]+\d*-\d+ \|.*✅ \|$', text, flags=re.M))
built = len(re.findall(r'^\| [A-Z]+\d*-\d+ \|.*🛠 \|$', text, flags=re.M))
total = len(re.findall(r'^\| [A-Z]+\d*-\d+ \|', text, flags=re.M))
summary = f'共 {total} 期：已渲染 {done} 期，工程已完成 {built} 期（待渲染）。'
if total - done - built:
	summary = summary[:-1] + f'，待制作 {total - done - built} 期。'
text = re.sub(r'^共 \d+ 期：.*$', summary, text, flags=re.M)
open(path, 'w', encoding='utf8').write(text)
print(f'{ep} marked done ({length}); {done}/{total} episodes complete')
