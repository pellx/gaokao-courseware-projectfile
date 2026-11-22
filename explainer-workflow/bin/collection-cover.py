"""Series ("合集") cover, 960×540: badge, book, title, episode count and the
textbook on the right.

    python3 bin/collection-cover.py <series-dir> <书名>
    e.g. python3 bin/collection-cover.py ~/gaokao-courseware-projectfile/biology/selective-2 生物与环境

Writes <repo>/out/<series>/00-collection-cover/cover.png (课本封面.jpg is read from <series>/covers/00-collection-cover/), rendered by the collection/
project. If that folder holds 课本封面.jpg / .png (a photo or scan of the real
textbook cover, supplied by the user), it is shown on the right; otherwise a
drawn green book with the volume and title is used.
"""
import json
import os
import re
import shutil
import subprocess
import sys

W = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
P = os.path.join(W, 'collection')
series = os.path.abspath(os.path.expanduser(sys.argv[1]))
# Folder name -> volume shown on the cover.
VOLUMES = {'required-1': '必修1', 'required-2': '必修2', 'selective-1': '选择性必修1', 'selective-2': '选择性必修2', 'selective-3': '选择性必修3'}
volume = VOLUMES.get(os.path.basename(series), os.path.basename(series))  # 选择性必修1

src_dir = os.path.join(series, 'covers', '00-collection-cover')  # input: 课本封面.jpg (kept in git)
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from outdir import out_dir, remotion_flags
out = os.path.join(out_dir(series), '00-collection-cover')  # output: cover.png (not kept)
bundle = os.path.join(out, '.bundle')
os.makedirs(out, exist_ok=True)
img = os.path.join(P, 'public', 'images')
for f in os.listdir(img):
	os.remove(os.path.join(img, f))
cover = None
for ext in ['jpg', 'jpeg', 'png', 'webp']:
	src = os.path.join(src_dir, f'课本封面.{ext}')
	if os.path.exists(src):
		cover = f'textbook.{ext}'
		shutil.copy2(src, os.path.join(img, cover))
		break

text = open(os.path.join(series, 'list.md'), encoding='utf8').read()
count = len(re.findall(r'^\| [A-Z]+\d*-\d+ \|', text, flags=re.M))
data = {
	'subject': 'biology',
	'badge': '高中生物',
	'book': f'人教版·{volume}',
	'title': [[[volume]], [[sys.argv[2], True]]],
	'sub': f'全{count}期 · 每个考点怎么考',
	'volume': volume,
	'name': sys.argv[2],
	'cover': cover,
}
json.dump(data, open(os.path.join(P, 'src', 'collection.json'), 'w', encoding='utf8'), ensure_ascii=False, indent='\t')

env = dict(os.environ, PATH=os.path.expanduser('~/.local/node/bin') + ':' + os.environ['PATH'])
run = lambda *a: subprocess.run(['npx', *a], cwd=P, env=env, check=True, stdout=subprocess.DEVNULL)
run('tsc', '--noEmit', '-p', '.')
run('remotion', 'bundle', f'--out-dir={bundle}', '--bundle-cache=false', '--log=error')
run('remotion', 'still', bundle, 'Cover', os.path.join(out, 'cover.png'), '--log=error', *remotion_flags())
print(os.path.join(out, 'cover.png'), '(课本封面: ' + ('用户提供的图片' if cover else '绘制') + ')')
