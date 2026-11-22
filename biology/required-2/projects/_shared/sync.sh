#!/usr/bin/env bash
# sync.sh [project ...]  → copy the shared components into the projects (default: all bx2-*).
set -euo pipefail
S=$(cd "$(dirname "$0")" && pwd)
cd "$S/.."
for p in ${@:-bx2-*}; do
	cp "$S"/{lib,gene,dna,chem}.tsx "$p/src/components/"
	cp "$S/Root.tsx" "$p/src/Root.tsx"
	cp "$S/Review.tsx" "$p/src/scenes/Review.tsx"
	cp "$S/voice.mjs" "$p/scripts/voice.mjs"
done
