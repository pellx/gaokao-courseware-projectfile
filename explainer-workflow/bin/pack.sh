#!/usr/bin/env bash
# pack.sh <first> <last> <chapter note>  → ~/Desktop/XB1-<first>至<last>.zip (projects without node_modules, covers, 简介, workflow, 渲染说明)
set -e; export PATH=$HOME/.local/node/bin:$PATH
A=$1; B=$2; NOTE=$3
S=$(mktemp -d); R=$S/XB1-${A}至${B}; mkdir -p "$R/封面和简介" "$R/工程"
cmds=""
for n in $(seq $A $B); do d=~/gaokao-courseware-projectfile/biology/selective-1/projects/xb1-$n; name=$(cd $d && node -p "const e=require('./src/episode.json'); e.id+'-'+e.title")
  mkdir -p "$R/封面和简介/$name"; cp ~/gaokao-courseware-projectfile/biology/selective-1/covers/"$name"/* "$R/封面和简介/$name/"
  (cd ~/gaokao-courseware-projectfile/biology/selective-1/projects && tar cf - --exclude=node_modules --exclude=.bundle --exclude=out/stills --exclude='*.mp4' --exclude='*.log' xb1-$n) | (cd "$R/工程" && tar xf -)
  cmds="$cmds
  cd 工程/xb1-$n
  npm ci
  npx remotion render Video \"out/$name.mp4\"
"
done
(cd ~/gaokao-courseware-projectfile && tar cf - --exclude=node_modules --exclude=.bundle explainer-workflow) | (cd "$R/工程" && tar xf -)
cp ~/gaokao-courseware-projectfile/biology/selective-1/list.md "$R/"
cat > "$R/渲染说明.txt" <<EOT
选择性必修1 第${A}-${B}期（${NOTE}）渲染说明

目录
- 封面和简介/   每期的封面（16:9、4:3、3:4）和简介.txt，可直接使用
- 工程/xb1-${A} ~ xb1-${B}   每期的完整 Remotion 工程（配音已生成，在 public/voice）
- 工程/explainer-workflow   批量制作的工作流（模板、脚本、README.md）
- list.md   22 期的总列表

准备
1. 安装 Node.js 18 或更新版本（https://nodejs.org）。
2. 第一次渲染时 Remotion 会自动下载一个 Chrome 内核，需要联网。

渲染（每期都一样，Windows / macOS / Linux 通用；每期都从解压后的 XB1-${A}至${B} 文件夹开始）
$cmds
成片为 1920×1080、30fps、H.264 + AAC，输出在各工程的 out 文件夹。
默认会用上所有 CPU 核心；内存不够时可加 --concurrency=4 之类的参数限制。

其他
- 预览和逐帧检查：npx remotion studio
- 重新导出封面：npx remotion still Cover16x9 out/cover-16x9.png（另有 Cover4x3、Cover3x4）
- 配音已经生成，渲染不需要 edge-tts。只有修改了 src/narration.json 的台词时，才需要运行
  npm run voice 重新生成配音（需要 Python 版 edge-tts，会把台词发送到微软语音服务）。
- 在 Linux/macOS 上也可以用工作流脚本：explainer-workflow/bin/build.sh <工程目录> video covers verify
EOT
cd $S && rm -f ~/Desktop/XB1-${A}至${B}.zip && python3 -c "
import os,zipfile,sys
z=zipfile.ZipFile(os.path.expanduser('~/Desktop/XB1-${A}至${B}.zip'),'w',zipfile.ZIP_DEFLATED)
n=0
for root,dirs,files in os.walk('XB1-${A}至${B}'):
  for f in files: z.write(os.path.join(root,f)); n+=1
z.close(); print(n,'files')"
ls -la ~/Desktop/XB1-${A}至${B}.zip
rm -rf "$S"
