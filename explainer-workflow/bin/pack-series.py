"""Packs a series for rendering on another (Windows) machine.

    python3 bin/pack-series.py <series-dir> <zip-name> [first last]
    e.g. python3 bin/pack-series.py ~/gaokao-courseware-projectfile/biology/selective-2 选择性必修2

The source series uses projects/ and covers/; the zip keeps the Chinese layout below
that the Windows .bat and 渲染说明 expect.

Writes ~/Desktop/<zip-name>.zip containing one folder <zip-name>/ with:
  一键渲染.bat     double-click to install once and render every episode
  渲染说明.txt     what the .bat does, plus manual commands
  list.md          the series list
  封面和简介/      covers and 简介 per episode
  工程/            package.json + lockfile shared by all projects, and the
                   projects themselves without node_modules or review stills
  成片/            empty; the .bat moves finished videos here

All projects share 工程/node_modules and one downloaded Chrome, so the user
installs once instead of once per episode.
"""
import json
import os
import re
import shutil
import sys
import tempfile
import zipfile

W = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
series = os.path.abspath(os.path.expanduser(sys.argv[1]))
name = sys.argv[2]
projects = sorted(d for d in os.listdir(os.path.join(series, 'projects')) if re.match(r'^[a-z]+\d*-\d+$', d))
if len(sys.argv) > 4:
	lo, hi = int(sys.argv[3]), int(sys.argv[4])
	projects = [p for p in projects if lo <= int(p.rsplit('-', 1)[1]) <= hi]

episodes = []
for p in projects:
	ep = json.load(open(os.path.join(series, 'projects', p, 'src', 'episode.json'), encoding='utf8'))
	root = open(os.path.join(series, 'projects', p, 'src', 'Root.tsx'), encoding='utf8').read()
	comp = 'Hormones' if 'id="Hormones"' in root else 'Video'
	episodes.append((p, comp, f"{ep['id']}-{ep['title']}"))

stage = tempfile.mkdtemp()
out = os.path.join(stage, name)
os.makedirs(os.path.join(out, '工程'))
os.makedirs(os.path.join(out, '成片'))
open(os.path.join(out, '成片', '（渲染好的视频会放在这里）.txt'), 'w', encoding='utf8').write('运行“一键渲染.bat”后，成片会出现在这个文件夹。\n')

skip = shutil.ignore_patterns('node_modules', '.bundle', 'stills', 'sheets', 'check', 'fonts', 'cover-*.png', '*.mp4', '*.log')
for p, _, title in episodes:
	shutil.copytree(os.path.join(series, 'projects', p), os.path.join(out, '工程', p), ignore=skip)
	cover = os.path.join(series, 'covers', title)
	if os.path.isdir(cover):
		shutil.copytree(cover, os.path.join(out, '封面和简介', title))
for f in ['package.json', 'package-lock.json']:
	shutil.copy2(os.path.join(W, 'template', f), os.path.join(out, '工程', f))
# The 17 MB font is identical in every project: ship it once, the .bat copies it in.
shutil.copytree(os.path.join(W, 'template', 'public', 'fonts'), os.path.join(out, '工程', 'fonts'))
shutil.copy2(os.path.join(series, 'list.md'), out)

BROWSER = r'%~dp0工程\node_modules\.remotion\chrome-headless-shell\win64\chrome-headless-shell-win64\chrome-headless-shell.exe'
calls = '\n'.join(f'call :render {p} {comp} "{title}"' for p, comp, title in episodes)
bat = f'''@echo off
chcp 65001 >nul
setlocal EnableExtensions
title {name} 视频渲染
cd /d "%~dp0"

rem 用法：双击渲染全部；或在命令行运行“一键渲染.bat {episodes[0][0]}”只渲染某一期。
rem 已经在“成片”文件夹里的视频会跳过，所以中途关掉后再次运行会接着渲染。
set "ONLY=%~1"
set "CLI=%~dp0工程\\node_modules\\@remotion\\cli\\remotion-cli.js"
set "BROWSER={BROWSER}"
set "FAILED="

where node >nul 2>nul
if errorlevel 1 (
	echo 没有找到 Node.js。请先安装 Node.js 18 或更新版本：https://nodejs.org
	echo 安装完成后重新双击本文件。
	pause
	exit /b 1
)

if not exist "%CLI%" (
	echo [准备 1/2] 安装渲染工具，只需一次，需要联网，大约几分钟……
	pushd "%~dp0工程"
	call npm ci --no-audit --no-fund
	popd
)
if not exist "%CLI%" (
	echo 渲染工具安装失败，请检查网络后重新运行。
	pause
	exit /b 1
)
if not exist "%BROWSER%" (
	echo [准备 2/2] 下载浏览器内核，只需一次……
	pushd "%~dp0工程"
	node "%CLI%" browser ensure
	popd
)
if not exist "%BROWSER%" (
	echo 浏览器内核下载失败，请检查网络后重新运行。
	pause
	exit /b 1
)

{calls}

echo.
if defined FAILED (
	echo 以下几期渲染失败：%FAILED%
	echo 可以重新运行本文件，已完成的会自动跳过。
) else (
	echo 全部完成，成片在“成片”文件夹。
)
pause
exit /b 0

:render
if defined ONLY if /i not "%ONLY%"=="%~1" exit /b 0
if not exist "%~dp0封面和简介\\%~3\\cover-16x9.png" (
	echo 正在生成 %~3 的封面……
	if not exist "%~dp0工程\\%~1\\public\\fonts\\NotoSansSC.ttf" (
		mkdir "%~dp0工程\\%~1\\public\\fonts" 2>nul
		copy /y "%~dp0工程\\fonts\\NotoSansSC.ttf" "%~dp0工程\\%~1\\public\\fonts\\" >nul
	)
	mkdir "%~dp0封面和简介\\%~3" 2>nul
	pushd "%~dp0工程\\%~1"
	for %%c in (16x9 4x3 3x4) do node "%CLI%" still Cover%%c "%~dp0封面和简介\\%~3\\cover-%%c.png" --browser-executable="%BROWSER%" --log=error
	popd
)
if exist "%~dp0成片\\%~3.mp4" (
	echo 跳过 %~3：成片已存在
	exit /b 0
)
echo.
echo ===== 正在渲染 %~3 =====
if not exist "%~dp0工程\\%~1\\public\\fonts\\NotoSansSC.ttf" (
	mkdir "%~dp0工程\\%~1\\public\\fonts" 2>nul
	copy /y "%~dp0工程\\fonts\\NotoSansSC.ttf" "%~dp0工程\\%~1\\public\\fonts\\" >nul
)
pushd "%~dp0工程\\%~1"
node "%CLI%" render %~2 "out\\%~3.mp4" --browser-executable="%BROWSER%"
if errorlevel 1 (
	popd
	set "FAILED=%FAILED% %~1"
	exit /b 0
)
popd
move /y "%~dp0工程\\%~1\\out\\%~3.mp4" "%~dp0成片\\" >nul
exit /b 0
'''
# cmd reads .bat files line by line in the console code page; chcp 65001 on
# the (ASCII) second line switches it to UTF-8. No BOM, CRLF line endings.
open(os.path.join(out, '一键渲染.bat'), 'w', encoding='utf8', newline='\r\n').write(bat)

lines = '\n'.join(f'  cd 工程\\{p}\n  node ..\\node_modules\\@remotion\\cli\\remotion-cli.js render {comp} "out\\{title}.mp4"\n  cd ..\\..\n' for p, comp, title in episodes)
readme = f'''{name}　讲解视频渲染说明（共 {len(episodes)} 期）

一、最简单的方法（Windows）
1. 安装 Node.js 18 或更新版本：https://nodejs.org （一路“下一步”即可）。
2. 解压本压缩包，双击“一键渲染.bat”。
3. 第一次运行会先安装渲染工具、下载浏览器内核（需要联网，只需一次），然后逐期渲染。
4. 渲染好的视频会移动到“成片”文件夹。已经渲染过的期会自动跳过，
   所以中途关掉窗口，再次双击就会接着渲染剩下的。
5. 只想渲染某一期：在本文件夹的地址栏输入 cmd 回车，然后输入
     一键渲染.bat {episodes[0][0]}
   （把 {episodes[0][0]} 换成想要的那一期）。

二、目录
- 一键渲染.bat     一键渲染全部
- 封面和简介/      每期简介.txt；三种尺寸封面（16:9、4:3、3:4）在运行 .bat 时自动生成到这里
- 工程/            每期的 Remotion 工程（配音已生成，在各工程的 public/voice）；
                   所有工程共用 工程/node_modules 和 工程/fonts 里的字体，只需安装一次
- 成片/            渲染好的视频
- list.md          总列表和每期考点

三、手动渲染（不用 .bat 时，或在 macOS / Linux 上）
在“工程”文件夹里先运行一次：
  npm ci
并把 工程/fonts/NotoSansSC.ttf 复制到每期的 public/fonts/ 文件夹（.bat 会自动做这一步）。
然后每期：
{lines}
成片为 1920×1080、30 fps、H.264 + AAC。默认用一半的 CPU 线程；
电脑较慢或内存不够时，可在 render 命令末尾加 --concurrency=2。

四、其他
- 预览某一期：cd 工程\\{episodes[0][0]} 后运行 node ..\\node_modules\\@remotion\\cli\\remotion-cli.js studio
- 配音已经生成，渲染不需要 edge-tts，也不会把内容发到任何服务。
- 一期大约 6～9 分钟，渲染时间取决于电脑性能。
'''
open(os.path.join(out, '渲染说明.txt'), 'w', encoding='utf8').write(readme)

zpath = os.path.expanduser(f'~/Desktop/{name}.zip')
if os.path.exists(zpath):
	os.remove(zpath)
n = 0
with zipfile.ZipFile(zpath, 'w', zipfile.ZIP_DEFLATED) as z:
	for dirpath, _, files in os.walk(out):
		for f in files:
			full = os.path.join(dirpath, f)
			z.write(full, os.path.relpath(full, stage))
			n += 1
with zipfile.ZipFile(zpath) as z:
	bad = z.testzip()
shutil.rmtree(stage)
print(f'{zpath}: {len(episodes)} episodes, {n} files, {os.path.getsize(zpath) / 1e6:.0f} MB, testzip: {bad or "OK"}')
