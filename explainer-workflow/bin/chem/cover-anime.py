# cover-anime.py <工程>...  封面插图：把 <系列>/assets/illustrations/cover-NN.* 拷进工程，写入 episode.json 的 cover.anime / animeCredit，
# 然后重排简介（intro-fmt.py）。mk.py 生成工程时也会调用这里的 apply()。
import glob, json, os, re, shutil, sys

def apply(proj):
    series = os.path.dirname(os.path.dirname(os.path.abspath(proj)))
    n = int(re.search(r'-(\d+)$', os.path.abspath(proj)).group(1))
    cands = glob.glob(f'{series}/assets/illustrations/cover-{n:02d}.*')
    if not cands:
        return False
    f = cands[0]
    meta = {}
    for l in open(f'{series}/assets/illustrations/meta.jsonl'):
        d = json.loads(l)
        meta[d['file']] = d
    m = meta[os.path.basename(f)]
    dst = 'cover-anime' + os.path.splitext(f)[1]
    shutil.copy(f, f'{proj}/public/images/{dst}')
    ep_path = f'{proj}/src/episode.json'
    ep = json.load(open(ep_path))
    title = re.sub(r'[\U0001F000-\U0001FFFF☀-➿]', '', m['title']).strip()
    ep['cover']['anime'] = dst
    ep['cover']['animeCredit'] = {'user': m['user'], 'title': title, 'url': f"https://www.pixiv.net/artworks/{m['id']}"}
    json.dump(ep, open(ep_path, 'w'), ensure_ascii=False, indent='\t')
    return True

if __name__ == '__main__':
    import subprocess
    W = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), 'template', 'src')
    for proj in sys.argv[1:]:
        for f in ('Cover.tsx', 'episode.ts', 'components/CoverLayout.tsx'):
            shutil.copy(f'{W}/{f}', f'{proj}/src/{f}')
        print(proj, apply(proj))
        subprocess.run(['python3', os.path.join(os.path.dirname(__file__), 'intro-fmt.py'), proj], check=True)
