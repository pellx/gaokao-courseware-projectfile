# 高考考点讲解视频 · 工程文件

高中物理、化学、生物的高考考点讲解视频的工程仓库。每期视频是一个 [Remotion](https://www.remotion.dev/) 工程，配音用 edge-tts 生成。教材按人教版（2019）。

仓库里只放**能重新生成视频的源文件**：每期的工程、照片和插图、课本封面原图、每期简介，以及制作工作流。渲染好的视频、封面图、截图和 `node_modules` 都不入库，需要时在本地重新生成（见[使用方法](#使用方法)）。

## 三科现状

### 模块分类文档

| 学科 | 有没有模块分类文档 | 文件 | 说明 |
|---|---|---|---|
| 物理 | 有 | [`physics/list.md`](physics/list.md) | 仿照化学，按知识之间的联系分成 **6 篇**（WLA～WLF）：力学、电学基础、波动与光、热学、近代物理、实验。**只讲知识点，不讲题型和解题方法**；21 个必做实验一个实验一期，集中在实验篇。含编排说明、课标依据（2017 年版 2020/2025 年修订）、分篇总览、每期考点，以及课标条目、必做实验和教材章节三张落点索引。2026-11-22 由旧版 17 个模块、159 期重编而来。 |
| 化学 | 有 | [`chemistry/chem.html`](chemistry/chem.html) | 北京高考化学考点清单：**7 个模块 A～G**、各模块考点编号（A1～A13 等）、5 道大题分别考哪些考点、大题答题模板。每个模块另有一份分期清单 `chemistry/<模块>/list.md`。 |
| 生物 | **没有** | —— | 目前按教材分册，每册一份 `biology/<册>/list.md`，一节教材一期，**没有跨册的模块分类**，也没有单独的综合题型期或实验专题期。 |

### 制作进度

状态：✅ 已渲染成片　🛠 工程已完成（待渲染）　⬜ 待制作

| 学科 | 系列 | 期数 | 考点数 | 状态 |
|---|---|---|---|---|
| 生物 | [必修1《分子与细胞》](biology/required-1/list.md) | 25 | 174 | 🛠 25 |
| 生物 | [必修2《遗传与进化》](biology/required-2/list.md) | 24 | 164 | 🛠 24 |
| 生物 | [选择性必修1《稳态与调节》](biology/selective-1/list.md) | 22 | 169 | ✅ 2　🛠 20 |
| 生物 | [选择性必修2《生物与环境》](biology/selective-2/list.md) | 15 | 101 | 🛠 15 |
| 生物 | [选择性必修3《生物技术与工程》](biology/selective-3/list.md) | 18 | 124 | 🛠 18 |
| 化学 | [模块A 物质结构与性质](chemistry/a-structure-and-properties/list.md) | 21 | 159 | 🛠 21 |
| 化学 | [模块B 化学语言与基本概念](chemistry/b-chemical-language-and-concepts/list.md) | 12 | 85 | 🛠 12 |
| 化学 | [模块C 元素及其化合物](chemistry/c-elements-and-compounds/list.md) | 16 | 111 | 🛠 16 |
| 化学 | [模块D 化学反应原理](chemistry/d-reaction-principles/list.md) | 20 | 142 | 🛠 20 |
| 化学 | [模块E 有机化学](chemistry/e-organic-chemistry/list.md) | 17 | 124 | 🛠 17 |
| 化学 | [模块F 化学实验](chemistry/f-experiments/list.md) | 9 | 67 | 🛠 9 |
| 化学 | [模块G 综合应用与情境](chemistry/g-applications-and-contexts/list.md) | 7 | 49 | 🛠 7 |
| 物理 | [6 篇（WLA～WLF）](physics/list.md) | 100 | 832 | 🛠 90　⬜ 10 |

合计：生物 104 期 / 732 个考点，化学 102 期 / 737 个考点，物理计划 100 期 / 832 个考点。

三科数量不能直接比谁更全，因为编排方式不同：

- **物理**：只讲知识点，不设题型期；78 期知识期，加 22 期实验期（实验基础 1 期，21 个必做实验各 1 期）。
- **化学**：按北京卷做过筛选，低频内容压缩，不考的不设考点；另有化工流程、实验探究等题型期。
- **生物**：只有教材小节期。

## 制作视频用的 Skill

视频是用 Claude Code 的 skill **`gaokao-explainer-video`** 批量制作的。它的完整说明在 [`explainer-workflow/SKILL.md`](explainer-workflow/SKILL.md)，命令细节在 [`explainer-workflow/README.md`](explainer-workflow/README.md)。

**它做什么：** 从系列的 `list.md` 读出这一期的考点，生成一个 Remotion 工程，包括：

- 每个考点一个场景，讲清楚考法、易错点和解题方法；
- 片尾是易错速查判断题；
- edge-tts（zh-CN-XiaoxiaoNeural）配音；
- 逐句截图供检查；
- 三种尺寸的封面（16:9、4:3、3:4）和纯文本简介；
- 每个系列另有一张合集封面。

化学系列用"规格文件"批量生成：在 `specs/hxX-NN.py` 里写数据，由 `bin/chem/mk.py` 生成工程。

**安装这个 skill：** 把 `SKILL.md` 链接进 Claude Code 的 skills 目录：

```bash
mkdir -p ~/.claude/skills/gaokao-explainer-video
ln -sfn "$PWD/explainer-workflow/SKILL.md" ~/.claude/skills/gaokao-explainer-video/SKILL.md
```

然后在 Claude Code 里说"做选必二第 3 期""做 list.md 里的下一期""做合集封面"之类，就会按这个 skill 的流程制作。

**工作流目录 `explainer-workflow/`：**

| 路径 | 作用 |
|---|---|
| `template/` | 每期工程的模板：场景组件、封面版式、配音脚本 |
| `bin/new-episode.sh` | 从模板新建一期工程 |
| `bin/build.sh` | 构建一期：`voice` 配音、`stills` 逐句截图、`covers` 封面、`video` 成片、`verify` 检查、`done` 标记 ✅ |
| `bin/finish.py` | 收尾：把简介复制到 `covers/`，在 list.md 里标 🛠 |
| `bin/check-frames.sh`、`bin/sheets.sh` | 单帧检查、四宫格截图 |
| `bin/collection-cover.py`、`bin/chem/collection-cover.py` | 合集封面（生物 / 化学） |
| `bin/chem/` | 化学系列：`mk.py` 规格→工程、`chk.py` 整期总览拼图、`px.py` 下载插图、`cover-anime.py`、`intro-fmt.py` |
| `bin/pack-series.py` | 把一个系列打成 Windows 一键渲染包（zip 里用中文目录和 `一键渲染.bat`） |
| `bin/outdir.py` | 计算输出目录（见下） |
| `collection/`、`sheet/` | 合集封面和拼图用的 Remotion 小工程 |

## 目录结构

```
.
├── package.json              所有工程共用的依赖（npm ci 一次即可）
├── biology/                  生物，按教材分册
│   ├── required-1/  required-2/                    必修1、必修2
│   └── selective-1/ selective-2/ selective-3/      选择性必修1～3
├── chemistry/                化学，按模块
│   ├── chem.html             北京高考化学考点清单（模块分类文档）
│   └── a-structure-and-properties/ … g-applications-and-contexts/
├── physics/
│   └── list.md               物理 6 篇的清单（模块分类文档）
└── explainer-workflow/       制作工作流和 skill
```

每个系列文件夹的结构相同：

| 文件 / 文件夹 | 内容 |
|---|---|
| `list.md` | 本系列的分期清单：每期的考点、考法、状态 |
| `projects/<期号>/` | 每期的 Remotion 工程（`src/` 场景和台词，`public/` 照片、插图、配音） |
| `covers/<期号-标题>/简介.txt` | 每期简介；`covers/00-collection-cover/课本封面.jpg` 是合集封面用的课本封面原图 |
| `assets/illustrations/`、`assets/photos/` | 化学系列的插图和照片素材（含来源记录 `meta.jsonl`） |
| `specs/` | 化学系列每期的规格文件 |

各期工程文件夹（如 `bx1-01`）和封面文件夹（如 `BX1-01-细胞是生命活动的基本单位`）都保留原来的期号和中文标题。

## 使用方法

**环境：**
- Node.js 22（脚本默认在 `~/.local/node/bin` 找）；
- Python 3；
- 只有重新生成配音时才需要 edge-tts（默认在 `~/.local/edge-tts-venv`）。

```bash
git clone https://github.com/pellx/gaokao-courseware-projectfile.git
cd gaokao-courseware-projectfile
npm ci                                   # 根目录一份 node_modules，所有工程共用
npx remotion browser ensure              # 下载一次渲染用的 Chrome

W=explainer-workflow
$W/bin/build.sh biology/selective-2/projects/xb2-01 stills covers   # 逐句截图 + 封面
$W/bin/build.sh biology/selective-2/projects/xb2-01 video           # 渲染成片
(cd biology/selective-2/projects/xb2-01 && npx remotion studio)     # 预览、逐帧查看
```

**所有生成的文件都写到根目录的 `out/`**，不会写进工程文件夹。`out/` 按系列路径排列，去掉 `projects/` 一层，例如：

```
biology/selective-2/projects/xb2-01  →  out/biology/selective-2/xb2-01/
                                          ├── stills/          逐句截图
                                          ├── check/           检查帧、总览拼图
                                          ├── cover-16x9.png   封面（另有 4x3、3x4）
                                          ├── 简介.txt          简介草稿
                                          └── XB2-01-….mp4      成片
```

运行 `python3 explainer-workflow/bin/outdir.py <工程目录>` 可以打印某一期的输出目录。

## 不入库的内容

以下内容都写在 `.gitignore` 里：

- `node_modules/`：根目录一份，`npm ci` 重装；
- `out/`：截图、封面图、成片视频，全部可以重新生成；
- `.bundle/`、`*.mp4`、`__pycache__/`；
- `archive/`：本地的旧交付包。

每期的配音 `public/voice/*.mp3` **会入库**，这样渲染时不用再调用语音服务。

## 版权说明

- 工程里的照片主要来自 Wikimedia Commons。
- 二次元插图来自 pixiv，每期简介和 `assets/illustrations/meta.jsonl` 里记录了作者和链接。插图版权归原作者所有，仅用于学习交流，如有侵权请联系删除。
- 课本封面图片版权归人民教育出版社所有。
- 字体是 Noto Sans SC（SIL Open Font License）。
