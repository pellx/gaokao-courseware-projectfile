# intro-fmt.py <工程>...  把输出目录（bin/outdir.py）里的 简介.txt 改成新格式（用户 2026-11-21 给的样式）：
#   本期考点 / 一、… / 图片来源（编号）/ 版权声明。封面插图从 episode.json 的 cover.animeCredit 读。
# 旧格式的考点行“- 考点X：…”和图片行“- …”从现有简介里解析，所以可以反复运行（已是新格式时从备份 简介.orig.txt 读）。
import json, os, re, shutil, sys

SUB = str.maketrans('0123456789', '₀₁₂₃₄₅₆₇₈₉')
SUP = str.maketrans('0123456789+-', '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻')
TOK = re.compile(r'(?<![A-Za-z0-9])(\d*)(\[?[A-Z][A-Za-z0-9()\[\]]*[+-]?|e-)(?![A-Za-z0-9])')

def formula(m):
    coef, t = m.group(1), m.group(2)
    if t == 'e-':
        return coef + 'e⁻'
    charge = ''
    if t[-1] in '+-':
        body, sign = t[:-1], t[-1]
        if re.fullmatch(r'[A-Z][a-z]?\d', body) or re.search(r'\d\d$', body) or re.search(r'\]\d$', body):
            charge, body = (body[-1] + sign).translate(SUP), body[:-1]
        else:
            charge = sign.translate(SUP)
        t = body
    elif not re.search(r'\d', t):
        return m.group(0)
    t = re.sub(r'(?<=[A-Za-z)\]])(\d+)', lambda x: x.group(1).translate(SUB), t)
    return coef + t + charge

def chemify(s):
    s = re.sub(r'10\^-(\d+)', lambda m: '10⁻' + m.group(1).translate(SUP), s)
    return TOK.sub(formula, s)
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from outdir import out_dir
for proj in sys.argv[1:]:
    out = out_dir(proj)
    f, orig = os.path.join(out, '简介.txt'), os.path.join(out, '简介.orig.txt')
    if not os.path.exists(orig) or not open(f).read().startswith('本期考点'):
        shutil.copy(f, orig)
    lines = open(orig).read().splitlines()
    pts = [chemify(re.sub(r'^- 考点[一二三四五六七八九十]+：', '', l)) for l in lines if re.match(r'^- 考点[一二三四五六七八九十]+：', l)]
    src = []
    sec = False
    for l in lines:
        if l.startswith('🖼'):
            sec = True
            continue
        if sec and l.startswith('- '):
            src.append(l[2:])
        elif sec and l and not l.startswith('- '):
            sec = False
    ep = json.load(open(os.path.join(proj, 'src', 'episode.json')))
    ac = ep['cover'].get('animeCredit')
    if ac:
        src.append(f"封面插图：{ac['user']}《{ac['title']}》{ac['url']}")
    num = '一二三四五六七八九十'
    o = ['本期考点', '']
    o += [f'{num[i]}、{p}' for i, p in enumerate(pts)]
    o += ['', '图片来源']
    for i, s in enumerate(src):
        m = re.match(r'^(.*?)(https?://\S+)$', s)
        o.append(f'{i + 1}.{m.group(1).strip()}' if m else f'{i + 1}.{s}')
        if m:
            o.append(m.group(2))
    o += ['', '插图版权归原作者所有，仅用于学习交流，如有侵权请联系删除', '']
    open(f, 'w').write('\n'.join(o))
    print('ok', proj)
