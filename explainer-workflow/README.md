# Exam explainer video workflow

Batch-produces 高考 exam-point explainer videos (Remotion + edge-tts), one per
episode in a series list such as `~/gaokao-courseware-projectfile/biology/selective-1/list.md`.
Each episode is its own project under `<series>/projects/`, created from `template/`.
简介.txt for every episode is collected in `<series>/covers/<ID-title>/`. Everything
generated (stills, check frames, sheets, covers, videos, the Remotion bundle) goes to
`<repo>/out/<subject>/<series>/<project>/` (see `bin/outdir.py`), never into the project,
and is not kept in git. All projects, `template/`, `collection/` and `sheet/` share one `node_modules` at the
repository root (`npm ci` there once; `build.sh` does it if it is missing). Projects
keep no node_modules, out/ or .bundle. Remotion always uses the one Chrome in
`<repo>/node_modules/.remotion` (`--browser-executable`) with webpack caching off.

Claude 使用的完整方法总结在 `SKILL.md`（也已装为 `~/.claude/skills/gaokao-explainer-video`）。

## Making one episode

```bash
W=~/gaokao-courseware-projectfile/explainer-workflow
P=~/gaokao-courseware-projectfile/biology/selective-1/projects
$W/bin/new-episode.sh XB1-04 biology/selective-1/projects/xb1-04   # 1. new project at $P/xb1-04 (path relative to ~/gaokao-courseware-projectfile)
```

2. **Write the episode** (the creative part) in `$P/xb1-04/`:
   - `src/episode.json`: title, book, the short 考点 names (`points`), intro
     and cover text, photo file names, six true/false review items, credits.
   - `src/narration.json`: one entry per scene, each a list of spoken lines.
     Keep `intro` (in1–in3) and `review` (rv1–rv5) as in the template; content
     scenes start with "考点N，…" and end with a 考法/易错/解题方法 line.
   - `src/scenes/*.tsx`: one component per content scene, timed off the
     narration cues (`T.<scene>.cue.<line>.from/.to`). List them in
     `src/scenes/index.ts`. `Intro` and `Review` are generic and need no edits.
   - `public/images/`: photos from Wikimedia Commons (see below).
   - `$OUT/简介.txt`: the plain-text description (format below).
3. **Build**:

```bash
$W/bin/build.sh $P/xb1-04 voice stills   # voice clips + one still per line
# look through $OUT/stills/*.jpeg  (OUT=$(python3 $W/bin/outdir.py $P/xb1-04)), fix layout, re-run "stills"
$W/bin/build.sh $P/xb1-04 video covers verify done
```

`build.sh` steps:

| step | does |
|---|---|
| `voice` | edge-tts (zh-CN-XiaoxiaoNeural) for changed lines only → `public/voice/`, `src/voice.json` |
| `stills` | `$OUT/stills/NNN-<line>.jpeg`: the last frame of every narration line, at half size |
| `video` | `$OUT/<ID>-<title>.mp4`, 1920×1080, 30 fps |
| `covers` | `$OUT/cover-16x9.png`, `cover-4x3.png`, `cover-3x4.png` |
| `verify` | prints duration and codecs, and every silence ≥ 2 s |
| `done` | marks the episode ✅ in `~/gaokao-courseware-projectfile/biology/selective-1/list.md` (or `$EPISODE_LIST`) with its path and length |

## Style rules

- Pure white background, warm palette (`theme.ts`); no blue or purple in the video.
- Covers use the subject colour (`SUBJECT` in `components/CoverLayout.tsx`):
  biology dark green, chemistry purple, physics blue.
- No "一轮复习" on covers or in the opening narration.
- Every 考点 explains how it is tested: 考法 / 易错 / 解题方法.
- At most 10 考点 per episode; split a textbook section into 上/下 if longer.
- Captions show `narration.json` text; `{word|red}` highlights a word (colours
  from `theme.ts`). Write formulas as `Na^+`, `HCO3^-`, `CO2`; `chem.tsx` sets
  sub/superscripts. `scripts/voice.mjs` turns them into words for the voice
  (钠离子, 二氧化碳 …). Use `"say"` on a line when the spoken text must differ
  (numbers, ranges, arrows).

## Scene kit

`components/ui.tsx`: `Scene`, `Header` (考点 tag + title), `Appear` (fade in
at a frame), `Callout` (考法/易错 box), `Photo`, `Hl`, `Defs` (SVG arrow markers),
`Narration` (voice + captions).

`components/kit.tsx`: `Table` (header row, rows fade in, optional focus on key
rows), `Tree` (left-to-right classification tree), `Chain` (boxes with arrows),
`G` (SVG group that fades in), `Arrow` (trimmed SVG arrow, offset for pairs).

## Images

Search Wikimedia Commons and download 1280 px thumbnails with a descriptive
User-Agent and a few seconds between requests (Commons rate-limits with 429).
Record author, title and licence for `episode.json` → `credits`, the cover's
`credit`, and `简介.txt`. Avoid blue-toned photos.

## 简介.txt format

Plain text, no Markdown headings or bold, so it pastes anywhere:

```
<opening paragraph: why the section matters, what is tested, N个考点，每个考点都讲清楚怎么考、怎么做>

📌 本期内容
- 考点一：…（details）
…
- 易错速查：6道判断题

✅ 适合人群：高二、高三学生，高考复习，生物教师备课参考

🖼 图片来源（Wikimedia Commons）
- Author《Title》License
```

## Requirements

Node at `~/.local/node/bin`; edge-tts in `~/.local/edge-tts-venv`. The voice
step sends narration text to Microsoft's speech service. Projects have no node_modules of their own;
Node finds the shared one at the repository root.

## Other scripts

- `bin/finish.py <project>`: copy 简介.txt into `<series>/covers/<ID-title>/`, mark 🛠 in list.md.
- `bin/check-frames.sh <project> <idx>...`: re-render single review stills after a fix.
- `bin/commons-search.py`, `bin/commons-fetch.py`: find and download Wikimedia Commons images.
- `bin/pack-series.py <series-dir> <zip-name>`: zip a whole series for rendering on Windows, with `一键渲染.bat` (shared node_modules, one Chrome download, font copied in per project).
- `bin/collection-cover.py <series-dir> <书名>`: series ("合集") cover, 960×540 (badge, book, title, episode count from list.md, and the textbook on the right: `<series>/covers/00-collection-cover/课本封面.jpg` if supplied, otherwise a drawn book), rendered by the `collection/` project into `<repo>/out/<subject>/<series>/00-collection-cover/cover.png`.
- `bin/sheets.sh <episode-dir> [sheet …]`: review stills four to a page (2×2) as `$OUT/sheets/`.
