"""mark.py <project-dir>: marks the episode 🛠 in <series>/list.md (no covers or 简介 — 必修1 delivers projects only)."""
import json, os, re, sys
proj = os.path.abspath(sys.argv[1])
series = os.path.dirname(os.path.dirname(proj))
ep = json.load(open(os.path.join(proj, 'src', 'episode.json'), encoding='utf8'))
name = f"{ep['id']}-{ep['title']}"
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
print(f'{name}: {summary}')
