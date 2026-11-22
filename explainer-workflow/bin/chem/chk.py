# chk.py <工程> [sheet-prefix]  — 渲染每个场景的最后一帧（取输出目录的 stills/）、插画小剧场中间帧和三张封面，拼成总览图。
# 先跑 build.sh <工程> voice stills covers。输出 <repo>/out/<系列>/<工程>/check/sheet-N.jpeg（见 bin/outdir.py）。
import glob, json, os, re, subprocess, sys
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from outdir import out_dir, remotion_flags
proj = os.path.abspath(sys.argv[1])
OUT = out_dir(proj)
src = proj + '/src'
nar = json.load(open(src + '/narration.json'))
voice = json.load(open(src + '/voice.json'))
idx = open(src + '/scenes/index.ts').read()
order = re.findall(r"\['(\w+)',", idx)
GAP = 8
offset = 0
mid = {}
ends = []
stills = sorted(glob.glob(OUT + '/stills/*.jpeg'))
byid = {re.sub(r'^\d+-', '', os.path.basename(p))[:-5]: p for p in stills}
for key in order:
    s = nar[key]
    t = s['lead']
    for i, l in enumerate(s['lines']):
        t += l.get('pause', 0) + (GAP if i else 0)
        fr = t
        t = fr + -(-int(voice[l['id']]['seconds'] * 30 * 1000) // 1000)
        mid[l['id']] = offset + (fr + t) // 2
    ends.append(byid[s['lines'][-1]['id']])
    offset += t + s['tail']
beats = []
for f in glob.glob(src + '/scenes/*.tsx'):
    txt = open(f).read()
    beats += re.findall(r'\{"k": "\w+", "at": "(\w+)"', txt)
    beats += re.findall(r'AnimeBeat k="\w+" from=\{(\w+)\.from\}', txt)
os.makedirs(OUT + '/check', exist_ok=True)
env = dict(os.environ, PATH=os.path.expanduser('~/.local/node/bin') + ':' + os.environ['PATH'])
bf = []
for b in beats:
    out = f"{OUT}/check/beat-{b}.jpeg"
    subprocess.run(['npx', 'remotion', 'still', OUT + '/.bundle', 'Video', out, f'--frame={mid[b]}', '--scale=0.5', '--log=error', *remotion_flags()], cwd=proj, env=env, check=True, stdout=subprocess.DEVNULL)
    bf.append(out)
imgs = ends + bf + [OUT + f'/cover-{c}.png' for c in ('16x9', '4x3', '3x4')]
sheet = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), 'sheet', 'sheet.sh')
for n in range(0, len(imgs), 16):
    part = imgs[n:n + 16]
    out = f"{OUT}/check/sheet-{n // 16 + 1}.jpeg"
    subprocess.run([sheet, out, '4'] + part, check=True, stdout=subprocess.DEVNULL)
    print(out)
