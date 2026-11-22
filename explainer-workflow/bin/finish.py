"""Files a built episode: copies its 简介.txt into the series folder (covers/<ID-title>/) and
marks it 🛠 (built, waiting to be rendered) in the series list.md.
The series folder is two levels above the project (<series>/projects/<project>).

    python3 bin/finish.py <episode-dir>
"""
import json
import os
import re
import shutil
import sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from outdir import out_dir

proj = os.path.abspath(sys.argv[1])
series = os.path.dirname(os.path.dirname(proj))
ep = json.load(open(os.path.join(proj, 'src', 'episode.json'), encoding='utf8'))
name = f"{ep['id']}-{ep['title']}"

dest = os.path.join(series, 'covers', name)
os.makedirs(dest, exist_ok=True)
# Rendered covers are not kept in the repository; they stay in <repo>/out/ (bin/outdir.py).
OUT = out_dir(proj)
if os.path.exists(os.path.join(OUT, '简介.txt')):
	shutil.copy2(os.path.join(OUT, '简介.txt'), dest)

path = os.path.join(series, 'list.md')
shown = proj.replace(os.path.expanduser('~'), '~')
text = open(path, encoding='utf8').read()
text = re.sub(rf'^(\| {re.escape(ep["id"])} \|.*\| )⬜( \|)$', r'\1🛠\2', text, flags=re.M)
text = re.sub(rf'^(### {re.escape(ep["id"])}\b.*)⬜\n', rf'\1🛠\n工程：`{shown}`\n', text, flags=re.M)
row = r'^\| [A-Z]+\d*-\d+ \|'
done = len(re.findall(row + r'.*✅ \|$', text, flags=re.M))
built = len(re.findall(row + r'.*🛠 \|$', text, flags=re.M))
total = len(re.findall(row, text, flags=re.M))
summary = f'共 {total} 期：已渲染 {done} 期，工程已完成 {built} 期（待渲染）。'
if total - done - built:
	summary = summary[:-1] + f'，待制作 {total - done - built} 期。'
text = re.sub(r'^共 \d+ 期：.*$', summary, text, flags=re.M)
open(path, 'w', encoding='utf8').write(text)
print(f'{name}: covers and 简介 → {dest}; {summary}')
