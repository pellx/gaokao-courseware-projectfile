# commons-fetch.py <outdir> <width> "File title"=name.jpg ...   → <width>px thumbnails, retries on 429
import json, os, sys, time, urllib.error, urllib.parse, urllib.request
UA = {'User-Agent': 'explainer-video-research/1.0 (education)'}

def get(url):
    for wait in (0, 20, 40, 80):
        time.sleep(wait)
        try:
            return urllib.request.urlopen(urllib.request.Request(url, headers=UA)).read()
        except urllib.error.HTTPError as e:
            if e.code != 429: raise
    raise SystemExit('still rate-limited')

out, width = sys.argv[1], sys.argv[2]
for arg in sys.argv[3:]:
    title, name = arg.rsplit('=', 1)
    if os.path.exists(f'{out}/{name}'): continue
    d = json.loads(get('https://commons.wikimedia.org/w/api.php?' + urllib.parse.urlencode({'action': 'query', 'format': 'json', 'titles': 'File:' + title, 'prop': 'imageinfo', 'iiprop': 'url', 'iiurlwidth': width})))
    p = next(iter(d['query']['pages'].values()))
    data = get(p['imageinfo'][0]['thumburl'])
    open(f'{out}/{name}', 'wb').write(data)
    print(name, len(data), flush=True)
    time.sleep(4)
