#!/usr/bin/env bash
# Renders single Stills frames for a quick layout check after editing a scene.
#   bin/check-frames.sh <episode-dir> <still index>...   → <repo>/out/<series>/<episode>/check/<idx>.jpeg
# Indexes are the NNN of stills/NNN-<line>.jpeg in the same output folder (one frame per narration line).
set -euo pipefail
export PATH=$HOME/.local/node/bin:$PATH
W=$(cd "$(dirname "$0")/.." && pwd)
D=$(cd "$1" && pwd); shift
OUT=$(python3 "$W/bin/outdir.py" "$D"); BROWSER=$(python3 "$W/bin/outdir.py" --browser)
cd "$D"; npx tsc --noEmit -p .
npx remotion bundle --out-dir="$OUT/.bundle" --bundle-cache=false --log=error > /dev/null
mkdir -p "$OUT/check"
for i in "$@"; do npx remotion still "$OUT/.bundle" Stills "$OUT/check/$i.jpeg" --frame=$i --scale=0.5 --browser-executable="$BROWSER" --log=error > /dev/null; echo "$OUT/check/$i.jpeg"; done
