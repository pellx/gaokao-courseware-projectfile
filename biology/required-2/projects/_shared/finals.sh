#!/usr/bin/env bash
# finals.sh <project> : last frame of every scene, four per page → out/finals/
set -euo pipefail
export PATH=$HOME/.local/node/bin:$PATH
cd "$1"
npx tsc --noEmit -p .
npx remotion bundle --out-dir=.bundle --log=error > /dev/null
n=$(node -p "Object.keys(require('./src/narration.json')).length")
pages=$(( (n + 3) / 4 ))
rm -rf out/finals
npx remotion render .bundle Finals out/finals --sequence --frames=0-$((pages - 1)) --image-format=jpeg --concurrency=2 --log=error > /dev/null
ls out/finals
