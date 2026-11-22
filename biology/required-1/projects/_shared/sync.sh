#!/usr/bin/env bash
# sync.sh [project ...]  → copy the shared components into the projects (default: all bx1-*).
set -euo pipefail
S=$(cd "$(dirname "$0")" && pwd)
cd "$S/.."
for p in ${@:-bx1-*}; do
	cp "$S"/{lib,chem,bio}.tsx "$p/src/components/"
	cp "$S/Root.tsx" "$p/src/Root.tsx"
	cp "$S/Review.tsx" "$p/src/scenes/Review.tsx"
	cp "$S/voice.mjs" "$p/scripts/voice.mjs"
done
