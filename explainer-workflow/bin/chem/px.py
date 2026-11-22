# Pixiv 公开接口小工具（全年龄筛选）。
#   px.py s <词> [页数]          搜索，列出 id、AI/手绘、收藏、尺寸、标题、作者、tag
#   px.py i <id>...              详情：描述里有没有转载禁止、tag
#   px.py g <系列目录> <id> <文件名>   下载 regular 图到 <系列>/assets/illustrations/，追加 meta.jsonl
import json, os, re, sys, time, urllib.parse, urllib.request

H = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36', 'Referer': 'https://www.pixiv.net/'}
BAD = re.compile(r'パンツ|下着|水着|ロリ|ふともも|太もも|Breast|おっぱい|巨乳|R-15|R-18|乳|尻|足裏|裸|セクシー|NSFW|bikini|swimsuit|lingerie|酒|ビール|タバコ|喫煙|血|グロ', re.I)
NOREPOST = re.compile(r'転載|無断|repost|reprint|転用|使用禁止|二次使用|AI学習', re.I)

def get(url, raw=False):
    for k in range(4):
        try:
            r = urllib.request.urlopen(urllib.request.Request(url, headers=H), timeout=30).read()
            return r if raw else json.loads(r)
        except Exception as e:
            err = e
            time.sleep(2 + 3 * k)
    raise err

def search(word, pages=1, thumbs=None, n=12):
    q = urllib.parse.quote(word)
    out = []
    for p in range(1, pages + 1):
        d = get(f'https://www.pixiv.net/ajax/search/illustrations/{q}?word={q}&order=date_d&mode=safe&p={p}&s_mode=s_tag&type=illust_and_ugoira')
        out += d['body']['illust']['data']
    for it in out:
        if not isinstance(it, dict) or it.get('xRestrict') != 0:
            continue
        tags = ' '.join(it.get('tags', []))
        if BAD.search(tags) or BAD.search(it.get('title', '')):
            continue
        if thumbs is not None:
            if n <= 0:
                break
            n -= 1
            u = re.sub(r'/c/250x250_80_a2/', '/c/360x360_70/', it['url']).replace('_square1200', '_master1200')
            os.makedirs(thumbs, exist_ok=True)
            fn = os.path.join(thumbs, f"{it['id']}{'a' if it.get('aiType') == 2 else ''}.jpg")
            if not os.path.exists(fn):
                try:
                    open(fn, 'wb').write(get(u, raw=True))
                except Exception as e:
                    print('thumb fail', it['id'], e)
        print(f"{it['id']}\t{'AI' if it.get('aiType') == 2 else '手'}\t{it['width']}x{it['height']}\t{it['title'][:20]}\t{it['userName'][:14]}\t{tags[:90]}")

def info(i):
    b = get(f'https://www.pixiv.net/ajax/illust/{i}')['body']
    desc = re.sub(r'<[^>]+>', ' ', b.get('description', ''))
    tags = [t['tag'] for t in b['tags']['tags']]
    warn = NOREPOST.findall(desc)
    print(f"{i}\t{'AI' if b.get('aiType') == 2 else '手'}\t♥{b.get('bookmarkCount')}\t{b['width']}x{b['height']}\tp{b.get('pageCount')}\t{b['title']}\t{b['userName']}\t{'⚠' + ','.join(warn) if warn else ''}\n\t{' '.join(tags)[:160]}\n\t{desc[:160]}")
    return b, tags, warn

def grab(series, i, fn):
    b, tags, warn = info(i)
    url = b['urls']['regular']
    d = os.path.join(series, 'assets', 'illustrations')
    os.makedirs(d, exist_ok=True)
    open(os.path.join(d, fn), 'wb').write(get(url, raw=True))
    meta = {'id': str(i), 'file': fn, 'user': b['userName'], 'title': b['title'], 'ai': b.get('aiType'), 'x': b.get('xRestrict'), 'w': b['width'], 'h': b['height'], 'warn': warn, 'tags': tags[:8]}
    with open(os.path.join(d, 'meta.jsonl'), 'a') as f:
        f.write(json.dumps(meta, ensure_ascii=False) + '\n')
    print('saved', os.path.join(d, fn))

cmd = sys.argv[1]
if cmd == 's':
    search(sys.argv[2], int(sys.argv[3]) if len(sys.argv) > 3 else 1)
elif cmd == 'q':
    # q <输出目录> <n> <词>...   每个词搜一页，下载前 n 张缩略图（文件名 = id，AI 图带 a）
    for w in sys.argv[4:]:
        print('##', w)
        search(w, 1, os.path.expanduser(sys.argv[2]), int(sys.argv[3]))
elif cmd == 'i':
    for i in sys.argv[2:]:
        info(i)
elif cmd == 'g':
    grab(os.path.expanduser(sys.argv[2]), sys.argv[3], sys.argv[4])
