#!/usr/bin/env bash
# sheet.sh <out.jpeg> <cols> <img>...   把多张图拼成一张 1920×1080（标签 = 文件名去扩展名）
set -euo pipefail
export PATH=$HOME/.local/node/bin:$PATH
cd "$(dirname "$0")"; OUT=$1; COLS=$2; shift 2
rm -rf public/c; mkdir -p public/c
J='['; i=0
for f in "$@"; do b=$(basename "$f"); cp "$f" "public/c/$i-$b"; L="${b%.*}"; J="$J{\"src\":\"c/$i-$b\",\"label\":\"$L\"},"; i=$((i+1)); done
J="${J%,}]"
echo "{\"imgs\":$J,\"cols\":$COLS}" > props.json
npx remotion still src/index.ts Sheet "$OUT" --props=props.json --bundle-cache=false --browser-executable="$(python3 ../bin/outdir.py --browser)" --log=error --jpeg-quality=80 > /dev/null
echo "$OUT"
