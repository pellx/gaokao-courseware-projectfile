#!/usr/bin/env bash
# Renders the review stills four to a page (2×2) as <repo>/out/<series>/<episode>/sheets/NN.jpeg, for
# faster review. Sheet k holds stills 4k..4k+3.
#   bin/sheets.sh <episode-dir> [sheet index ...]
set -euo pipefail
export PATH=$HOME/.local/node/bin:$PATH
W=$(cd "$(dirname "$0")/.." && pwd)
D=$(cd "$1" && pwd); shift
OUT=$(python3 "$W/bin/outdir.py" "$D"); B=--browser-executable=$(python3 "$W/bin/outdir.py" --browser)
cd "$D"
npx tsc --noEmit -p .
npx remotion bundle --out-dir="$OUT/.bundle" --bundle-cache=false --log=error > /dev/null
n=$(node -p "Object.values(require('./src/narration.json')).reduce((s, x) => s + x.lines.length, 0)")
pages=$(( (n + 3) / 4 ))
if [ $# -eq 0 ]; then
	rm -rf "$OUT/sheets"
	npx remotion render "$OUT/.bundle" Sheet "$OUT/sheets" "$B" --sequence --frames=0-$((pages - 1)) --image-format=jpeg --concurrency=2 --log=error > /dev/null
else
	mkdir -p "$OUT/sheets"
	for i in "$@"; do npx remotion still "$OUT/.bundle" Sheet "$OUT/sheets/element-$i.jpeg" "$B" --frame=$i --log=error > /dev/null; done
fi
ls "$OUT/sheets"
