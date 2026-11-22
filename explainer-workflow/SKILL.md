---
name: gaokao-explainer-video
description: 批量制作高考考点讲解视频（Remotion + edge-tts 配音），每期一个工程，附三种尺寸封面和纯文本简介，打包成 zip 交给用户在自己电脑上渲染；也负责整个系列的“合集封面”。只要用户提到做讲解视频、做某一期/某几期、选必一/必修/某章某节的视频、list.md 里的下一期、封面、合集封面、简介、打包工程，或者说“继续做后面的”，就用这个 skill，即使没提 Remotion。
---

# 高考考点讲解视频

一期视频讲一节教材（人教版），由若干“考点”场景组成：开场 → 考点一…考点N → 易错速查（判断题）→ 结尾。
每句台词对应一段配音，画面上的元素按台词出现的时刻逐个淡入。

工作流在 `~/gaokao-courseware-projectfile/explainer-workflow/`（`template/` 是工程模板，`bin/` 是脚本，`README.md` 有命令细节）。
所有系列都在 `~/gaokao-courseware-projectfile/` 下：生物 `biology/required-1|required-2|selective-1|selective-2|selective-3`（必修1、必修2、选必一～三），化学 `chemistry/a-structure-and-properties` … `g-applications-and-contexts`（模块 A～G，`chemistry/chem.html` 是模块考点总表），物理 `physics/list.md`。每个系列结构相同：`list.md`（总列表，每期的考点就从这里来）、`projects/xbN-NN`（工程）、`covers/`（封面和简介，合集封面在 `covers/00-collection-cover/`）、`renders/`（成片，有才建）；化学另有 `assets/illustrations|photos`（插图、照片）和 `specs/`（规格文件）。
整个仓库只在根目录有一份共用的 `node_modules`（根目录 `package.json`，`npm ci` 一次即可；`build.sh` 发现没有时会自动装），各工程、`template/`、`collection/`、`sheet/` 都往上找到它；Chrome 也只用 `node_modules/.remotion` 里那一份（脚本都带 `--browser-executable`），webpack 缓存关闭（`--bundle-cache=false`），所以工程里不会再长出 node_modules。
**输出目录**：所有生成的文件（逐句截图、检查帧、拼图、封面、简介草稿、视频、Remotion bundle）都写到仓库根目录的 `out/`，按系列路径排列、去掉 `projects/` 一层，例如 `xb2-01` → `~/gaokao-courseware-projectfile/out/biology/selective-2/xb2-01/`（`bin/outdir.py` 负责换算，`python3 $W/bin/outdir.py <工程>` 可直接打印）。下文写的 `$OUT/…` 都指这个目录。工程文件夹里不生成任何东西。
仓库只保存工程文件和图片（照片、插图、课本封面原图）以及 `covers/<ID-标题>/简介.txt`；渲染好的视频和封面图都不保留，需要时重新生成。
- **交付**改为 GitHub：仓库 `pellx/gaokao-courseware-projectfile`（公开），本地就是 `~/gaokao-courseware-projectfile`。只提交工程文件和图片；node_modules、out/、.bundle、mp4 由 `.gitignore` 排除。推送前先征得用户同意。早期的单期项目（热效应、PCR、FFN）在 `~/early-explainer-videos/`。
新系列照这个结构在对应学科下另建一个英文名文件夹（每期的工程名、封面文件夹名照旧）：先写 list.md（表格 + 每期考点，状态用 ⬜/🛠/✅），再逐期做。

## 用户定下的规则

这些是用户明确要求过的，违反了就要返工：

- **画面**：纯白背景，暖色（`theme.ts` 里的 red / orange / green / brown / muted）。视频里**不用蓝色和紫色**，包括配图——偏蓝的照片（蓝天、蓝色背景、蓝染色的显微照片）直接放弃。
- **封面**：学科色做底，生物是深绿。
- **不写“一轮复习”**：封面、开场台词、简介都不出现。badge 写“高考生物”，简介的适合人群写“高考复习”。
- **每个考点都讲怎么考**：每个考点场景最后一句是 考法 / 易错 / 解题方法，画面上配一个 `Callout`。
- **配图**只用 Wikimedia Commons，作者、标题、许可证写进 `episode.json` 的 `credits`、封面的 `credit` 和简介。唯一例外是下面的二次元插图。
- **开场和结尾不说废话，直接讲知识点**：
  - **开场两句**：in1 只说标题（“原子结构与核素。”），in2 直接说高考怎么考、共几个考点。
  - **不要说**：“同学们好”“这节课梳理……”；教材位置（第几册第几章）；在本系列中的位置（第几期、共几期）。
  - **开场第一帧就是完整画面**：标题、考点、照片全部直接显示，不做渐显，减少浪费的时间。模板 `Intro.tsx` 已用 `<Scene fadeIn={false}>`，lead 3、tail 15。
  - **badge**：写“高考化学 · <模块名>”。封面上的“第N期 / 共M期”可以保留，方便观众找系列；简介第一句直接以“<标题>：”开头讲考点。
  - **结尾**：不说“我们下期再见”。rv1 只说“六道判断题，检验一下。”，rv5 是一句口诀式总结加“下一期：<标题>”。
- **文案里不出现动漫角色名**：台词、字幕、气泡都用外观特征指代，比如“手心里这只小恐龙”“三个粉头发的女孩”，不写“一里”“喜多”之类。只有署名和简介的图片来源里保留作者原标题。
- **每期正片里放 3 张二次元插图**（2026-11 起的要求）：动漫插图或小漫画，用来吸引注意力，内容要和所在考点契合，做到寓教于乐。它们放在**考点场景之中**，和开场的 Commons 照片、封面**同时存在**，不能取代开场照片或封面。
  - **必须全年龄**：不是色图，也不要擦边。搜索结果里 tag 带 パンツ／下着／水着／ロリ／魅惑のふともも／Breasts 之类的直接跳过。
  - **角色**：优先从少女乐队和百合向作品里找，例如孤独摇滚（ぼっち・ざ・ろっく!）、BanG Dream!、轻音少女（けいおん!）、Girls Band Cry、摇曳百合（ゆるゆり）、终将成为你。
  - **AI 图**：可以优先考虑（AI 作者通常对使用更开放），但**必须是 Q 版／デフォルメ／ちびキャラ风格**，写实或半写实的 AI 美少女图不要。手绘图不限风格。
  - **完成质量（用户 2026-11-22 定）**：不要收藏数很低、画技明显稚嫩的初学者作品（线条潦草、比例走形、没上色或明显没画完）。不必追求大作或完成度极高的作品，**Q 版和短篇漫画仍然优先**，但要看完成质量。
    - 硬性门槛：pixiv 收藏数（bookmarkCount）≥ 100。`px.py` 默认只列出、只下载 ≥ 100 的图（环境变量 `PX_MIN_BOOKMARKS` 可调）；冷门题材实在找不到时可降到 50，但不能更低。
    - 下载后用 Read 看图再决定：收藏数过线但画面粗糙的照样不用。
    - 搜索可以加 `00users入り` 一类的 tag（如 `ぼっち・ざ・ろっく! 100users入り`）直接找有一定人气的图。
  - **版权**：不找对版权管得特别严的作者。作品简介里写了「無断転載禁止」「転載・使用禁止」「No repost」的直接跳过。
  - **简介**：「🖼 图片来源」里逐条写作者、标题、pixiv 链接，最后加一句「插图版权归原作者所有，仅用于学习交流，如有侵权请联系删除（侵删）。」。片尾 credits 也写上作者名并注明（侵删）。
- **简介和封面的新格式（用户 2026-11-21 定）**：
  - 简介只有三块：「本期考点」（一、二、三……，每条“考点名（要点）”）、「图片来源」（1. 2. 3. 编号，pixiv 链接单独一行）、最后一句「插图版权归原作者所有，仅用于学习交流，如有侵权请联系删除」。不要开场段落、emoji、适合人群、下一期。化学式用 Unicode 上下标（Fe³⁺、SO₄²⁻）。生成脚本 `bin/chem/intro-fmt.py`。
  - 封面只要**标题 + 考点列表 + 一张照片 + 一张二次元插画**：去掉徽章和“第N期/共M期”那一行、“N大考点·每点讲透怎么考”、照片左上角标签、左下角“考法+易错”印章。插画以白边卡片压在照片左下角。实现：`episode.json` 的 `cover.anime` 有值时 `CoverLayout` 走简洁版。
  - 封面插画每期单独挑一张（不和正片 3 张重复），选取逻辑同正片插图且要契合本期主题；放 `<系列>/assets/illustrations/cover-NN.jpg`，`bin/chem/cover-anime.py <工程>` 写入并重排简介（mk.py 会自动调用），简介里记作“封面插图：作者《标题》链接”。
- **配音**用 edge-tts 的 zh-CN-XiaoxiaoNeural（会把台词发到微软语音服务，用户已同意）。
- **不在这台服务器上渲染整片**（太慢）。这里只生成配音、逐句截图和封面；整片由用户在自己电脑上渲染。
- **交付**：通过 GitHub 仓库（见上文），不再默认打 zip 放桌面；只有用户要 Windows 一键渲染包时才用 `pack-series.py`。
- 不要让用户粘贴密钥。回复用中文。
- 用户说“做 N 期”就只做 N 期；做完一批先汇报，不要自作主张做完全部。

## 物理系列（2026-11-22 起）

- 位置：`physics/a-mechanics`、`b-electricity`、`c-waves-and-light`、`d-thermal`、`e-modern`、`f-experiments`（篇A～F），每篇有自己的 `list.md`、`specs/`、`projects/`、`assets/`；`physics/list.md` 是全书总清单（编排说明和索引），进度以各篇 list.md 为准。
- 编号 WLA-01 …，工程目录 `wla-01`。用化学同样的规格文件流程：`specs/wla-01.py` 里写 `EP = dict(subj='physics', mod='A', n=1, …)`，`python3 $C/mk.py <规格>` 生成工程（badge 自动写“高考物理 · <篇名>”，配色为物理蓝）。
- **只讲知识点（用户定）**：不讲例题、题型、考法和解题方法。
  - 开场 in2 说本期讲什么、共几个考点，不说“高考怎么考”。
  - 每个考点场景的最后一句用“{要点|green}：……”小结，或“{易错|red}：……”做概念辨析；callout 的标签相应写“要点”或“易错”，不写“考法”“解题方法”。
  - 篇A～E 不讲必做实验；篇F 每期一个实验，讲目的、原理、器材、步骤、数据处理、误差。
- 公式在台词里写清楚读法（`say`），如“v等于v零加a t”；下标用 `_0`（`v_0`），上标用 `^2`。

## 多个代理并行制作时（这台机器 2 核、3 GB 内存）

- 渲染（`build.sh … stills/covers/video`）自动排队，同一时间只跑一个；`chk.py` 等额外渲染也要用 `python3 $W/bin/netlock.py render -- <命令>` 包起来。不需要检查排版时不要渲染。
- Commons 和 pixiv 的请求经 `bin/netlock.py` 全局限速，脚本已内置，不要另开并发下载。
- 插图不重复：选图前查同一学科所有篇的 `assets/illustrations/meta.jsonl`，已用过的 pixiv id 不再用。

## 做一期的流程

### 1. 规划

从 `list.md` 读这一期的考点。一期最多 10 个考点；教材一节内容太多就拆成（上）（下）两期，list.md 里也分两行。
先列出场景表：每个考点一个场景，写下要画的东西（对比表、流程链、分类树、示意图、曲线）。
场景 key 用英文小写（`allergy`、`hiv`），组件名同名大写。

### 2. 建工程

```bash
W=~/gaokao-courseware-projectfile/explainer-workflow
$W/bin/new-episode.sh XB1-23 biology/selective-1/projects/xb1-23   # 路径相对 ~/gaokao-courseware-projectfile
```

工程里没有 node_modules，用仓库根目录那份共用的。需要别的工程里的自定义组件（如 `Chart.tsx` 曲线图）就直接复制过来。

### 3. episode.json

- `title`：教材节名，拆期时带（上）/（下）。
- `points`：考点短名，**每个 ≤ 9 个字**（封面上要排得下）。
- `intro.title` / `cover.title`：大标题分行，`true` 表示这段用强调色。**封面每行 ≤ 6～7 个字**，3:4 封面会把长行折断；太长就拆成两行或把一部分移到 kicker。
- `review.items`：6 道判断题，`ok:false` 的要写 `fix`（改正后的说法）。挑学生最容易错的点。
  - **对题和错题的版面必须一样**（用户 2026-11-21 指出：题干位置会泄露答案）。模板 `Review.tsx` 已改成题干固定占两行高度并居中，下面总留一行“改正”的位置；不要再改回按内容居中。

### 4. narration.json（台词决定时间轴）

```json
"allergy": {
  "lead": 15, "tail": 25,
  "lines": [
    {"id": "al1", "text": "考点一，过敏反应。已免疫的机体在{再次接触相同的抗原|red}时……"},
    {"id": "al6", "text": "{考法|orange}：……{易错|red}：……", "pause": 10}
  ]
}
```

- `intro` 固定两句（in1–in2），`review` 固定（rv1–rv5），照模板改内容即可：现在只有两句：in1 只有标题，in2 说高考怎么考、共几个考点（不提教材位置和系列位置）。
- 内容场景第一句以“考点N，”开头，最后一句讲考法 / 易错 / 解题方法。
- `{词|red}`、`{词|orange}`、`{词|green}` 是字幕高亮，和画面上的高亮颜色对应。
- 化学式写 `Na^+`、`HCO3^-`、`CO2`，字幕自动排上下标，配音自动读成“钠离子”“二氧化碳”。
- **字幕和读音不一样时加 `say`**：英文缩写读字母（`"say": "……H I V……"`），`2,4-D` 读“二四D”，`α` 读“阿尔法”，`10^-10` 读“10的负10次方”，箭头、范围、数字也要用 `say` 写成口语。
- 一句话不要太长（字幕两行以内），一个场景 4～8 句比较合适。

### 5. 配图

```bash
python3 $W/bin/commons-search.py "Metchnikoff" "tuberculin test"      # 看候选的尺寸、许可、作者
python3 $W/bin/commons-fetch.py <工程>/public/images 1280 "File:标题.jpg"=metchnikoff.jpg
```

Commons 会限流（429），脚本每次请求间隔 4 秒并自动重试，不要并发。搜索只返回图片（已加 `filetype:bitmap`）；标题不全时用 API 的 `list=search` 查准文件名。
照片边上有一条蓝天之类的，可以裁掉：`npx remotion ffmpeg -i a.jpg -vf "crop=iw:ih*0.9:0:ih*0.1" b.jpg`。
下载后**逐张用 Read 看图**，确认没有蓝紫色调、内容对得上、不是低清图。
优先选：历史人物/经典实验的老照片（多为公有领域）、实物照片。记下作者和许可证。

**二次元插图（每期 3 张，放在正片里）**

Danbooru 被 Cloudflare 拦（403）。Safebooru 能用，但少女乐队题材少。主要用 Pixiv 的公开 ajax 接口，请求要带 `Referer: https://www.pixiv.net/` 和浏览器 UA：

```bash
# 搜索：作品名 + 关键词（ちびキャラ / デフォルメ / 白衣 / 先生 / 化学 / 分身 / 元素 …）
# 结果只留 xRestrict==0。aiType：1 = 手绘，2 = AI（AI 图只要 Q 版）。
curl -s -A "Mozilla/5.0" -H "Referer: https://www.pixiv.net/" "https://www.pixiv.net/ajax/search/illustrations/<词>?word=<词>&order=date_d&mode=all&p=1&s_mode=s_tag&type=illust_and_ugoira"
# 单张详情：作者、标题、description（看有没有转载禁止）、收藏数；图片地址是 body.urls.regular，下载同样要带 Referer
curl -s -A "Mozilla/5.0" -H "Referer: https://www.pixiv.net/" "https://www.pixiv.net/ajax/illust/<id>"
```

**选图**
- **思路**：找“能当比喻”的画面，再用气泡把它翻译成知识点。HXA-01 的例子：
  - 手心里的小恐龙 → 原子核个头极小、质量几乎全在它身上
  - 过去、现在、未来三个粉头发的女孩（同一个人）抱在一起 → 同一元素、不同核素，互为同位素
  - 白大褂“喜多博士” → 片尾
- **看图**：下载到 `public/images/` 后用 Read 看图。要求白底或浅底，暖色为主，大面积蓝紫的不要（角色发色里有点蓝可以接受）。
- **备用**：存进 `episode.json` 的 `anime` 数组。HXA-01 没用上的 たかたか《結束バンド》（pixiv #134640971，四人被扎带串在一起，Q 版）留给 HXA-08 化学键。
- **不重复**：同一系列尽量换不同的图和角色。

**放进视频**
- `episode.json` 的 `anime` 数组每张写 `{key, src, credit, url}`。`credit` 里不要放 emoji，字体里没有，会显示成方块。
- 组件在 `components/anime.tsx`，模板里已有：
  - **`AnimeBeat`**（插画小剧场）：在考点场景里加 1～2 句专门的台词，比如“打个比方：……”“看这三个粉头发的女孩：……”（不写角色名）。这几句期间，白色蒙层盖住当前内容，左边放大图，右边放气泡，气泡写知识点对应关系。台词念完就淡出，场景内容恢复。写法是 `<AnimeBeat k="hand" from={at3b.from} to={at3b.to}>气泡文字</AnimeBeat>`，放在 `<Narration>` 之前，场景文件里缩进是两个 tab。这句台词要排在 考法/易错 那句之前。
  - **`AnimeSticker`**：贴在画面空白处，比如片尾结束画面。这时要把结束画面的文字整体左移，给图让出位置（Review.tsx 里 `right: 520`）。
- **检查**：逐句截图取的是每句最后一帧，那时小剧场正在淡出，看不清。要单独渲染这句中间的帧：`npx remotion still $OUT/.bundle Video $OUT/check/vNNNN.jpeg --frame=NNNN --scale=0.5 --browser-executable=$(python3 $W/bin/outdir.py --browser)`。帧号按 narration.json 和 voice.json 算：每个场景 lead 起算，句间隔 8 帧，再加上该句的 pause。

### 6. 场景组件 `src/scenes/*.tsx`

```tsx
const t = T.allergy;
const {al2, al3} = t.cue;
export const Allergy: React.FC = () => (
  <Scene duration={t.duration}>
    <Header tag="考点一">过敏反应的机理</Header>
    <svg width={1740} height={520} viewBox="0 0 1740 520" style={{position: 'absolute', left: 90, top: 165}}>
      <Defs />
      <G at={al2.from}>…</G>
      <G at={al3.from}>…</G>
    </svg>
    <Appear at={t.cue.al6.from}><Callout …>…</Callout></Appear>
    <Narration t={t} />
  </Scene>
);
```

- 时间全部取自台词：`t.cue.<id>.from` / `.to`。不要手写帧数，改了台词时间轴会自动跟着变。
- 曲线图用 `components/plot.tsx`：`Plot`（数据坐标 0–1，曲线从左往右画出，带参考线、圆点、标签）、`sample(f)` 采样函数、`sub('t','1')` 生成 SVG 下标。
- 现成组件（`components/ui.tsx`、`kit.tsx`）：`Scene`、`Header`、`Appear`、`Callout`、`Card`、`Photo`、`Hl`、`Defs`、`Narration`；`Table`（行逐个出现，可高亮关键行）、`Tree`（分类树）、`Chain`（带箭头的流程）、`G`（SVG 分组淡入）、`Box`（SVG 圆角方框，居中放置，可带第二行小字）、`Arrow`（marker 用 `arrow`、`arrow-red`、`arrow-orange`、`arrow-green`）。
- 机理图、实验装置这类现成组件画不了的，就在场景文件里写小的 SVG 组件（抗体、胚芽鞘、剂量曲线等），坐标用常量集中定义，方便调位置。
- 写完在 `scenes/index.ts` 的 `SCENES` 里按顺序登记。

### 7. 生成配音和逐句截图，逐张检查

```bash
$W/bin/build.sh <工程> voice stills          # 配音只重新生成改过的句子
$W/bin/check-frames.sh <工程> 12 13 14       # 只改了几个场景时，单独渲染这几帧
```

`$OUT/stills/NNN-<句子id>.jpeg` 是每句台词最后一帧，**每一张都要用 Read 看**，按下面的版面规则检查，改完再出图，直到没有问题。

### 8. 封面和简介

```bash
$W/bin/build.sh <工程> covers                # cover-16x9 / 4x3 / 3x4.png
```

三张封面都要看：标题有没有折行、考点列表有没有溢出、照片裁切位置（`photoPos`）是否合适。
16:9 封面放了 kicker 之后最多只排得下 8 个考点左右，9 个考点就去掉 kicker。

`$OUT/简介.txt` 用纯文本（不要 Markdown 标题和粗体，方便粘贴到任何平台）：

```
<开场一段：这一节为什么重要、高考怎么考，N个考点，每个考点都讲清楚怎么考、怎么做>

📌 本期内容
- 考点一：…（要点）
…
- 易错速查：6道判断题

✅ 适合人群：高二、高三学生，高考复习，生物教师备课参考

🖼 图片来源（Wikimedia Commons）
- 作者《标题》许可证
```

### 9. 收尾

- `python3 $W/bin/finish.py <工程>`：把简介复制到 `<系列>/covers/<ID-标题>/简介.txt`（封面图不复制、不进仓库），list.md 里这一期标 🛠 并写上工程路径、更新统计行。用户渲染完成后再标 ✅（`build.sh <工程> done`）。
- 打包：`python3 $W/bin/pack-series.py ~/gaokao-courseware-projectfile/biology/selective-2 选择性必修2 [首期 末期]` → `~/Desktop/选择性必修2.zip`。zip 里仍用中文目录（给用户 Windows 上的一键渲染用），内含：
  - `一键渲染.bat`：用户双击即可。在 `工程/` 共用一份 `npm ci` 和一份浏览器内核（`remotion browser ensure`），每期用 `--browser-executable` 指向它，否则 Remotion 会给每个工程各下载一次 Chrome；字体只放一份，渲染前复制进各工程；已在 `成片/` 的自动跳过；`一键渲染.bat xb2-03` 只渲染一期。文件是 UTF-8 无 BOM、CRLF，第二行 `chcp 65001`。
  - `渲染说明.txt`、`list.md`、`封面和简介/`、`工程/`（不含 node_modules、截图、封面副本）、空的 `成片/`。
  - 脚本最后会 `testzip()` 校验。旧的 `pack.sh` 只适用于选必一的分批打包。
- 向用户汇报：做了哪几期、zip 位置、**拿不准的内容**（见下）、渲染后需要听一下的读音。

## 通用组件（模板已含，2026-11 化学 A 模块起）

- `components/board.tsx`：`Board`（考点场景版面：标题 + 内容 + 提示框 + `overlay` 放插画小剧场，内容自动缩放填满到 y≈880，可用 `zoom` 固定）、`Row`、`Col`、`Rule`、`Panel`、`Big`、`Items`、`Mark`（✓✗ 条）。
- `components/sci.tsx`：`PTable`（周期表，`marks` 上色）、`Orb`（轨道表示式）、`Cell` + `CORNERS/FACES/EDGES/BODY/TETRA_*`（晶胞）、`Mol`（分子构型）、`Lewis`（电子式）、`ec('3d6 4s2')`（电子排布式上标）。
- `chem()` 支持 `^5`、`^-10` 这类无电荷上标（`3d^5`、`10^-10`）。
- 字体缺 Unicode 下标、⁺⁻ 和 ∛；² ³ π σ √ 有。台词里写 `3d^6`、`10^-10`，别直接写 ⁻¹⁰。
- 批量制作时可以写一个“规格文件 → 工程”的脚本（episode.json、narration.json、scenes/index.ts、简介一次生成），再逐期写场景 .tsx。检查时把各场景最后一句截图、小剧场中间帧、封面拼成总览图一起看，省很多次读图。
- Wikimedia 限流：按 API 返回的 `thumburl`（宽 ≤ 960）下载，别请求非标准尺寸。

## 化学模块系列的批量流程（2026-11 起，B、C 模块用的就是它）

每期写一个**规格文件** `<系列>/specs/hxX-NN.py`（`EP = dict(...)`），场景内容也写成数据，不用再手写 .tsx：

```bash
C=~/gaokao-courseware-projectfile/explainer-workflow/bin/chem
python3 $C/mk.py <规格.py>                      # 生成工程：episode.json、narration.json、scenes/*.tsx、图片、简介
$W/bin/build.sh <工程> voice stills covers
python3 $C/chk.py <工程>                         # 各场景最后一句 + 小剧场中间帧 + 三张封面拼成 $OUT/check/sheet-1.jpeg，读这一张就能检查整期
python3 $W/bin/finish.py <工程>
```

- 规格里的 `scenes` 每项是 `(key, 组件名, 台词列表, scene(...))`。`scene()` 里用积木：`rule` `panel` `big` `table` `chain` `row` `items` `mark` `text` `bridge`（双线桥/单线桥）`lewis`（电子式）、`dict(t='nuc', ...)`（核素符号）。时间用台词 id 表示。渲染组件是模板 `components/auto.tsx` 的 `AutoScene`；mk.py 每次都把 auto/kit/chem/sci/board.tsx 同步进工程。
- 文本里 `{词|red}` 高亮，化学式自动上下标；`_x` 写下标（`NO_x`），`^n+` 写字母上标。表格、标签、标题都支持。intro 的 subtitle、endLine、照片 caption 是纯文本，不要写化学式。
- 组件名不能叫 `React`（会和 import 冲突），比如“反应”场景用 `Occur`。
- 插图：`bin/chem/px.py q <目录> <n> <词>...` 批量下缩略图，用 `sheet/sheet.sh` 拼图挑选；`px.py g <系列> <id> <文件名>` 下载原图并写 meta.jsonl。各期的插图放 `<系列>/assets/illustrations/NN-名字.jpg`。

## 合集封面（整个系列一张）

用户要“合集封面”时用这个，不是每期的封面。规格是用户定的：**960×540，一张图**，不放配图墙、不列章节。

```bash
python3 $W/bin/collection-cover.py ~/gaokao-courseware-projectfile/biology/selective-1 稳态与调节   # 第二个参数是册名（教材书名）
```

- 输出 `~/gaokao-courseware-projectfile/out/<学科>/<系列>/00-collection-cover/cover.png`（不进仓库），由 `$W/collection/` 工程渲染（`src/Collection.tsx`；脚本写 `src/collection.json`）。
- 版面（左边文字，右边课本）：
  - 左上：深绿底徽章「高中生物」+ 灰字「人教版·选择性必修N」。注意合集封面用户要的是「高中生物」，单期封面仍是「高考生物」。
  - 两行大标题：「选择性必修N」黑字，册名（如「稳态与调节」）学科绿。
  - 标题下一行深绿字：「全N期 · 每个考点怎么考」，期数从 list.md 总览表的行数自动数。
  - 右侧：**课本封面**，放在 `covers/00-collection-cover/课本封面.jpg`（或 .png）。用户要求过从网上找真实封面，来源是国家中小学智慧教育平台的电子教材（下面的命令）；文件夹里没有封面图时，脚本画一本绿色的书（“普通高中教科书 / 生物学 / 选择性必修N / 册名”）代替。
  - 底部一条学科色渐变细条。
- 出图后用 Read 看：标题、徽章没有折行，课本不压到文字。
- 下载课本封面：智慧教育平台的教材目录是公开 JSON。先取 `https://s-file-1.ykt.cbern.com.cn/zxx/ndrs/resources/tch_material/version/data_version.json`，它的 `urls` 列出几个 `part_*.json`；在里面找 `title` 为“普通高中教科书·生物学选择性必修N 册名”、`tag_list` 含“人教版”的条目，`custom_properties.thumbnails[0]` 就是封面（1488×2104 的 jpg）。用 `curl -A "Mozilla/5.0"` 下载到 `<系列>/covers/00-collection-cover/课本封面.jpg`，再用 Read 确认是人教版、册次对得上。人教版选必一、二、三的条目 id 分别是 `ec6ab12c-0b06-43a5-bf62-ee90b619f607`、`825baab7-f0ea-4a90-9b4a-513f338e2484`、`d12ff6b6-b6cd-444a-9749-4642aa350482`。

## 版面规则（检查截图时逐条对照）

- 画布 1920×1080。**内容不要低于 y≈880**，字幕从 y≈900 开始。
- 文字、箭头、标签不要互相压住；箭头两端不要戳进方框里（`Arrow` 会自动缩短两端）。
- SVG 里用了箭头 marker 却没有 `<Defs />`，箭头会消失。
- `Table` 表头不要留空单元格（会塌掉），左上角写“比较项目”之类。
- 上下标：HTML 里用 `<sup>`/`<sub>` 或 `chem('CO2')`，SVG 里用错开 `dy`、缩小字号的 `<tspan>`（`plot.tsx` 的 `sub()`）；**不要用 Unicode 上下标字符**（⁻¹⁰、CO₂、t₁ 之类），字体里不全，会显示错乱。写完 `grep -n '[₀-₉⁰-⁹]' src/scenes/*.tsx` 查一遍。
- 开场标题太长时模板会自动缩小字号；封面每行仍要 ≤ 7 个字。
- 一页内容太少（只有一两行）就换成大卡片布局，别让画面下半截空着；提示框紧跟在内容下方。
- 字号：正文 ≥ 24，SVG 标签 ≥ 22；示意图里的小部件（如胚芽鞘尖端）画大一点，并在旁边用文字写出结果，别只靠图形表达。
- 曲线图（剂量-效应曲线等）要和教材图一致：峰值位置、穿过横轴的位置、两条曲线的相对关系。需要不对称的峰时调参数，不要将就。

## 内容准确性

- 按 2019 版人教版教材的表述写，考法和易错点用高考真题的常见出法。
- 记不准的教材细节（分类方式、数据、实验结果）**照常做完，但在汇报里单独列出来，请用户核对**，不要假装确定。例：植物生长调节剂的分类、莴苣种子萌发的红光/远红光数据。
- 英文缩写、希腊字母、化学式的读音要列给用户，渲染后试听。

## 环境

- Node：`export PATH=$HOME/.local/node/bin:$PATH`（脚本里已设好）。Remotion 4.0.242。
- edge-tts：`~/.local/edge-tts-venv`。
- 服务器上没有 PIL 和 ffmpeg 命令行，看图用 Read；ffprobe/ffmpeg 用 `npx remotion ffprobe` / `npx remotion ffmpeg`。
- 配音偶尔因网络失败，重跑 `build.sh <工程> voice` 即可（只补缺的句子）。读音词表在 `scripts/voice.mjs` 的 `WORDS`（已含 K/2→二分之K、λ→兰姆达）。
- 早期工程 xb1-09 的合成名是 `Hormones`，其余都是 `Video`。
