# commons-fetch.py <outdir> <width> "File title"=name.jpg ...   → <width>px thumbnails, retries on 429
import os
sys_path_bin = os.path.dirname(os.path.abspath(__file__))
import sys as _s; _s.path.insert(0, sys_path_bin)
from netlock import throttle
import json, os, sys, time, urllib.error, urllib.parse, urllib.request
UA = {'User-Agent': 'explainer-video-research/1.0 (education)'}

def get(url):
    for wait in (0, 20, 40, 80):
        time.sleep(wait)
        try:
            with throttle('commons', 4):
                return urllib.request.urlopen(urllib.request.Request(url, headers=UA)).read()
        except urllib.error.HTTPError as e:
            if e.code != 429: raise
    raise SystemExit('still rate-limited')

out, width = sys.argv[1], sys.argv[2]
for arg in sys.argv[3:]:
    title, name = arg.rsplit('=', 1)
    title = title[5:] if title.startswith('File:') else title  # 带不带 File: 前缀都可以
    if os.path.exists(f'{out}/{name}'): continue
    d = json.loads(get('https://commons.wikimedia.org/w/api.php?' + urllib.parse.urlencode({'action': 'query', 'format': 'json', 'titles': 'File:' + title, 'prop': 'imageinfo', 'iiprop': 'url|size', 'iiurlwidth': width})))
    p = next(iter(d['query']['pages'].values()))
    if 'imageinfo' not in p:
        print('not found on Commons:', title, flush=True); continue
    ii = p['imageinfo'][0]
    url = ii['thumburl']
    if ii.get('width', 0) <= int(width):
        # 原图比请求宽度还窄时，这个缩略图地址会失败（看起来像 429）；Commons 对原图下载限流也很严。
        # 改用比原图窄的最大标准宽度重新取缩略图。
        std = [w for w in (1280, 960, 800, 640, 500, 330, 250) if w < ii['width']]
        if std:
            d = json.loads(get('https://commons.wikimedia.org/w/api.php?' + urllib.parse.urlencode({'action': 'query', 'format': 'json', 'titles': 'File:' + title, 'prop': 'imageinfo', 'iiprop': 'url', 'iiurlwidth': std[0]})))
            url = next(iter(d['query']['pages'].values()))['imageinfo'][0]['thumburl']
        else:
            url = ii['url']
    data = get(url)
    open(f'{out}/{name}', 'wb').write(data)
    print(name, len(data), flush=True)
    time.sleep(4)
