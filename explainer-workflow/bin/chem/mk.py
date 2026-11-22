# mk.py <spec.py>  — 化学模块系列：由一期的规格文件生成工程（episode.json、narration.json、scenes/index.ts、图片、简介）。
# 规格文件里 EP = {...}；场景 .tsx 放在规格文件旁的 scenes/ 目录，原样复制进工程。
# 系列由 EP['mod']（'A'/'B'/'C'…）决定，见 MODS。
import json, os, re, shutil, subprocess, sys
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from outdir import out_dir

D = os.path.expanduser('~/gaokao-courseware-projectfile/chemistry')
W = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
MODS = {
    'A': ('a-structure-and-properties', '物质结构与性质', 21),
    'B': ('b-chemical-language-and-concepts', '化学语言与基本概念', 12),
    'C': ('c-elements-and-compounds', '元素及其化合物', 16),
    'D': ('d-reaction-principles', '化学反应原理', 20),
    'E': ('e-organic-chemistry', '有机化学', 17),
    'F': ('f-experiments', '化学实验', 9),
    'G': ('g-applications-and-contexts', '综合应用与情境', 7),
}
# 物理：规格里写 subj='physics'，mod 用 'A'～'F'
PMODS = {
    'A': ('a-mechanics', '力学', 32),
    'B': ('b-electricity', '电学基础', 22),
    'C': ('c-waves-and-light', '波动与光', 8),
    'D': ('d-thermal', '热学', 7),
    'E': ('e-modern', '近代物理', 9),
    'F': ('f-experiments', '实验', 22),
}
SUBJ = {
    'chemistry': dict(root=D, mods=MODS, prefix='HX', badge='高考化学', who='化学教师'),
    'physics': dict(root=os.path.dirname(D) + '/physics', mods=PMODS, prefix='WL', badge='高考物理', who='物理教师'),
}
# 规格文件里可以直接用的积木（生成 components/auto.tsx 的 JSON）
def rule(tag, at, text, c='red', **k): return dict(t='rule', tag=tag, at=at, text=text, c=c, **k)
def panel(title, at, lines, c='orange', **k): return dict(t='panel', title=title, at=at, lines=lines, c=c, **k)
def big(at, text, **k): return dict(t='big', at=at, text=text, **k)
def items(*its, **k): return dict(t='items', items=[dict(at=a, text=x) for a, x in its], **k)
def mark(ok, at, text, **k): return dict(t='mark', ok=ok, at=at, text=text, **k)
def text(at, s, **k): return dict(t='text', at=at, text=s, **k)
def table(at, head, cols, rows, **k): return dict(t='table', at=at, head=head, cols=cols, rows=[dict(at=r[0], cells=list(r[1:])) for r in rows], **k)
def chain(*steps, arrows=None, **k): return dict(t='chain', steps=[dict(at=a, text=x, **({'c': c} if c else {})) for a, x, c in [(s + (None,))[:3] for s in steps]], arrows=arrows or [], **k)
def row(*cols, **k): return dict(t='row', cols=[c if isinstance(c, dict) else dict(blocks=list(c)) for c in cols], **k)
def colw(blocks, flex=None, w=None): return dict(blocks=blocks, flex=flex, w=w)
def bridge(at, tokens, arcs, **k): return dict(t='bridge', at=at, tokens=tokens, arcs=[dict(zip(('from', 'to', 'at', 'text', 'c', 'above'), a)) for a in arcs], **k)
def lewis(at, parts, **k): return dict(t='lewis', at=at, parts=parts, **k)
def A(sym, d, c=None): return dict(sym=sym, d=list(d), **({'c': c} if c else {}))
def scene(tag, title, blocks, callout=None, beat=None, **k):
    d = dict(tag=tag, title=title, blocks=blocks, **k)
    if callout: d['callout'] = dict(zip(('label', 'at', 'text'), callout))
    if beat: d['beat'] = [dict(zip(('k', 'at', 'text'), b)) for b in beat] if isinstance(beat, list) else dict(zip(('k', 'at', 'text'), beat))
    return d
import math
def pts(f, a=0.0, b=1.0, n=60): return [[round(a + (b - a) * i / n, 4), round(f(a + (b - a) * i / n), 4)] for i in range(n + 1)]
def curve(at, p, c='red', **k): return dict(at=at, pts=p if isinstance(p, list) else pts(p), c=c, **k)
def plot(at, x, y, curves=(), **k): return dict(t='plot', at=at, x=x, y=y, curves=list(curves), **k)
def hump(x0, x1, y0, y1, peak, xp=None):
    """能量图：从 (x0,y0) 平台经过峰 peak 到 (x1,y1) 平台的平滑曲线点列（数据坐标）。"""
    xp = xp if xp is not None else (x0 + x1) / 2
    out = []
    for i in range(41):
        x = x0 + (x1 - x0) * i / 40
        if x <= xp:
            t = (x - x0) / (xp - x0); y = y0 + (peak - y0) * (math.sin(t * math.pi / 2) ** 2)
        else:
            t = (x - xp) / (x1 - xp); y = peak + (y1 - peak) * (math.sin(t * math.pi / 2) ** 2)
        out.append([round(x, 4), round(y, 4)])
    return out
def levels(segs):
    """多步能量图：segs = [(y平台, 峰), ..., y终点]；平台宽 0.08，返回点列。"""
    n = len(segs) - 1; out = []; w = 1.0 / (n + 0.6); x = 0.0
    y = segs[0][0]
    out.append([0.0, y])
    for i in range(n):
        y0, peak = segs[i]; y1 = segs[i + 1][0] if isinstance(segs[i + 1], tuple) else segs[i + 1]
        xa = x + 0.3 * w if i == 0 else x
        xb = x + w
        out += [[xa, y0]] + hump(xa, xb, y0, y1, peak)[1:]
        x = xb
    out.append([1.0, out[-1][1]])
    return out
ns = dict(math=math, pts=pts, curve=curve, plot=plot, hump=hump, levels=levels, rule=rule, panel=panel, big=big, items=items, mark=mark, text=text, table=table, chain=chain, row=row, colw=colw, bridge=bridge, lewis=lewis, A=A, scene=scene)
exec(open(sys.argv[1]).read(), ns)
E = ns['EP']
mod = E['mod']
SJ = SUBJ[E.get('subj', 'chemistry')]
folder, mname, total = SJ['mods'][mod]
SERIES = f"{SJ['root']}/{folder}"
ANIME = SERIES + '/assets/illustrations'
PHOTO = SERIES + '/assets/photos'
META = {}
for l in open(ANIME + '/meta.jsonl'):
    try:
        d = json.loads(l)
        META[d['file']] = d
    except Exception:
        pass

num = E['n']
pid = f"{SJ['prefix'].lower()}{mod.lower()}-{num:02d}"
ID = f"{SJ['prefix']}{mod}-{num:02d}"
proj = f'{SERIES}/projects/{pid}'
if not os.path.exists(proj):
    subprocess.run([W + '/bin/new-episode.sh', ID, proj], check=True)
src = proj + '/src'
img = proj + '/public/images'
os.makedirs(img, exist_ok=True)

ph = E['photo']
shutil.copy(PHOTO + '/' + ph['src'], img + '/' + ph['file'])
anime, names = [], []
for key, f in E['anime']:
    m = META[f]
    dst = key + os.path.splitext(f)[1]
    shutil.copy(ANIME + '/' + f, img + '/' + dst)
    title = re.sub(r'[\U0001F000-\U0001FFFF☀-➿]', '', m['title']).strip()
    anime.append({'key': key, 'src': dst, 'credit': f"插图：{m['user']}《{title}》pixiv #{m['id']}", 'url': f"https://www.pixiv.net/artworks/{m['id']}", 'user': m['user'], 'title': title})
    if m['user'] not in names:
        names.append(m['user'])

ep = {
    'id': ID,
    'title': E['title'],
    'subject': E.get('subj', 'chemistry'),
    'book': f'{mname} · 第{num}期 / 共{total}期',
    'points': E['points'],
    'intro': {'badge': f"{SJ['badge']} · {mname}", 'title': E['introTitle'], 'subtitle': E['subtitle'], 'photo': ph['file'], 'photoCaption': ph['caption'], 'photoPos': ph.get('pos', 'center')},
    'cover': {'badge': SJ['badge'], 'title': E['coverTitle'], 'photo': ph['file'], 'photoPos': ph.get('coverPos', {'16x9': ph.get('pos', 'center'), '4x3': ph.get('pos', 'center'), '3x4': 'center 35%'} if ph.get('portrait', True) else ph.get('pos', 'center')), 'photoTag': ph['tag'], 'credit': ph['short'], 'clean': True},
    'review': {'items': E['review'], 'endTitle': E['introTitle'], 'endLine': E['endLine'], 'slogan': E['slogan']},
    'credits': f"图片来源：Wikimedia Commons —— {ph['long']}；插图来自 pixiv：{'、'.join(names)}（侵删）",
    'anime': [{k: a[k] for k in ('key', 'src', 'credit', 'url')} for a in anime],
}
json.dump(ep, open(src + '/episode.json', 'w'), ensure_ascii=False, indent='\t')

def L(t):
    d = {'id': t[0], 'text': t[1]}
    if len(t) > 2 and t[2]:
        d['say'] = t[2]
    if len(t) > 3 and t[3]:
        d['pause'] = t[3]
    return d

nar = {'intro': {'lead': 3, 'tail': 15, 'lines': [L(x) for x in E['intro']]}}
for key, comp, lines, *_ in E['scenes']:
    nar[key] = {'lead': 15, 'tail': 30, 'lines': [L(x) for x in lines]}
nar['review'] = {'lead': 15, 'tail': 90, 'lines': [L(x) for x in E['rv']]}
json.dump(nar, open(src + '/narration.json', 'w'), ensure_ascii=False, indent='\t')

imports = ["import React from 'react';", "import type {T} from '../timeline';", "import {Intro} from './Intro';", "import {Review} from './Review';"]
order = ["\t['intro', Intro],"]
for key, comp, lines, *_ in E['scenes']:
    imports.append(f"import {{{comp}}} from './{comp}';")
    order.append(f"\t['{key}', {comp}],")
order.append("\t['review', Review],")
open(src + '/scenes/index.ts', 'w').write('\n'.join(imports) + "\n\n// Scene order of the video. Each key must match a scene in narration.json.\nexport const SCENES: [keyof typeof T, React.FC][] = [\n" + '\n'.join(order) + '\n];\n')

sd = os.path.splitext(os.path.abspath(sys.argv[1]))[0] + '-scenes'
if os.path.isdir(sd):
    for f in os.listdir(sd):
        shutil.copy(os.path.join(sd, f), src + '/scenes/' + f)
for key, comp, lines, *rest in E['scenes']:
    if rest and rest[0]:
        open(f"{src}/scenes/{comp}.tsx", 'w').write(
            "import React from 'react';\nimport {AutoScene} from '../components/auto';\n\n"
            f"export const {comp}: React.FC = () => <AutoScene k=\"{key}\" d={{{json.dumps(rest[0], ensure_ascii=False)}}} />;\n")
# 模板里新加的组件同步进来（旧工程建于组件之前）
for f in ('auto.tsx', 'kit.tsx', 'chem.tsx', 'sci.tsx', 'board.tsx', 'CoverLayout.tsx', 'plot.tsx'):
    shutil.copy(W + '/template/src/components/' + f, src + '/components/' + f)
for f in ('Cover.tsx', 'episode.ts', 'scenes/Intro.tsx'):
    shutil.copy(W + '/template/src/' + f, src + '/' + f)

lines = [E['blurb'], '', '📌 本期内容']
for i, (p, note) in enumerate(E['points_long']):
    lines.append(f'- 考点{"一二三四五六七八九十"[i]}：{p}（{note}）')
lines += ['- 易错速查：6道判断题', '', f"✅ 适合人群：高一至高三学生，高考复习，{SJ['who']}备课参考", '', '🖼 图片来源', f"- {ph['long']}（Wikimedia Commons）"]
for a in anime:
    lines.append(f"- 插图：{a['user']}《{a['title']}》{a['url']}")
lines += ['插图版权归原作者所有，仅用于学习交流，如有侵权请联系删除（侵删）。', '']
if E.get('next'):
    lines.append(f"⏭ 下一期：{E['next']}")
os.makedirs(proj + '/out', exist_ok=True)
open(out_dir(proj) + '/简介.txt', 'w').write('\n'.join(lines) + '\n')
# 封面插图 + 新格式简介
subprocess.run(['python3', os.path.join(os.path.dirname(os.path.abspath(__file__)), 'cover-anime.py'), proj], check=True)
print('ok', proj)
