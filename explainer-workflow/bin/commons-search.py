# commons-search.py "query" ...   → candidate files with size, licence and author
import json, sys, time, urllib.error, urllib.parse, urllib.request
UA = {'User-Agent': 'explainer-video-research/1.0 (education)'}

def get(url):
    for wait in (0, 20, 40, 80):
        time.sleep(wait)
        try:
            return urllib.request.urlopen(urllib.request.Request(url, headers=UA)).read()
        except urllib.error.HTTPError as e:
            if e.code != 429: raise
    raise SystemExit('still rate-limited')

for q in sys.argv[1:]:
    url = 'https://commons.wikimedia.org/w/api.php?' + urllib.parse.urlencode({'action': 'query', 'format': 'json', 'generator': 'search', 'gsrsearch': q + ' filetype:bitmap', 'gsrnamespace': 6, 'gsrlimit': 8, 'prop': 'imageinfo', 'iiprop': 'url|size|extmetadata', 'iiextmetadatafilter': 'LicenseShortName|Artist'})
    d = json.loads(get(url))
    print('##', q)
    for p in sorted(d.get('query', {}).get('pages', {}).values(), key=lambda p: p.get('index', 0)):
        ii = p['imageinfo'][0]; m = ii.get('extmetadata', {})
        lic = m.get('LicenseShortName', {}).get('value', '?')
        art = m.get('Artist', {}).get('value', '?')
        import re; art = re.sub('<[^>]+>', '', art)[:40]
        print(f"  {p['title'][5:][:70]} | {ii['width']}x{ii['height']} | {lic} | {art}")
    time.sleep(4)
