"""化学模块的合集封面（960×540，精简版）：两行标题 + 一张照片卡片 + 底部色条。
不放徽章、版本、“全N期”行（与单期视频封面的精简处理一致）。

    python3 bin/chem/collection-cover.py <series-dir> <第一行> <第二行（模块名，强调色）> <照片> <署名> [照片位置]

输出 <repo>/out/<series>/00-collection-cover/cover.png（不进仓库），由 collection/ 工程渲染。
"""
import json, os, shutil, subprocess, sys

W = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
P = os.path.join(W, 'collection')
series = os.path.abspath(os.path.expanduser(sys.argv[1]))
line1, line2, photo, credit = sys.argv[2:6]
pos = sys.argv[6] if len(sys.argv) > 6 else 'center'
src_dir = os.path.join(series, 'covers', '00-collection-cover')  # input: 课本封面.jpg (kept in git)
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))) + '/bin')
from outdir import out_dir, remotion_flags
out = os.path.join(out_dir(series), '00-collection-cover')  # output: cover.png (not kept)
bundle = os.path.join(out, '.bundle')
os.makedirs(out, exist_ok=True)
img = os.path.join(P, 'public', 'images')
for f in os.listdir(img):
    os.remove(os.path.join(img, f))
name = 'photo' + os.path.splitext(photo)[1]
shutil.copy2(photo, os.path.join(img, name))
data = {'subject': 'chemistry', 'badge': '', 'book': '', 'title': [[[line1]], [[line2, True]]], 'sub': '', 'volume': '', 'name': line2,
        'cover': None, 'clean': True, 'photo': name, 'credit': credit, 'photoPos': pos}
json.dump(data, open(os.path.join(P, 'src', 'collection.json'), 'w', encoding='utf8'), ensure_ascii=False, indent='\t')
env = dict(os.environ, PATH=os.path.expanduser('~/.local/node/bin') + ':' + os.environ['PATH'])
run = lambda *a: subprocess.run(['npx', *a], cwd=P, env=env, check=True, stdout=subprocess.DEVNULL)
run('tsc', '--noEmit', '-p', '.')
run('remotion', 'bundle', f'--out-dir={bundle}', '--bundle-cache=false', '--log=error')
run('remotion', 'still', bundle, 'Cover', os.path.join(out, 'cover.png'), '--log=error', *remotion_flags())
print(os.path.join(out, 'cover.png'))
