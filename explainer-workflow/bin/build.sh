#!/usr/bin/env bash
# Builds an episode. Steps run in the order given (default: all).
#   bin/build.sh <episode-dir> [voice] [stills] [video] [covers] [verify] [done]
#
# Outputs go to <repo>/out/<subject>/<series>/<project>/ (see bin/outdir.py), never
# into the project folder itself:
#   voice   narration.json -> public/voice/*.mp3 + src/voice.json (edge-tts; these stay in the project)
#   stills  $OUT/stills/NNN-<line>.jpeg: the last frame of every narration line, for review
#   video   $OUT/<ID>-<title>.mp4
#   covers  $OUT/cover-16x9.png, cover-4x3.png, cover-3x4.png
#   verify  duration, streams and long silences of the rendered video
#   done    mark the episode ✅ in the series list.md (see bin/mark-done.py)
set -euo pipefail
W=$(cd "$(dirname "$0")/.." && pwd)
ROOT=$(dirname "$W")
DIR=$(cd "$1" && pwd)
shift
export PATH=$HOME/.local/node/bin:$PATH
# Every project uses the one shared node_modules at the repository root (found by walking up from here).
[ -d "$ROOT/node_modules" ] || (cd "$ROOT" && npm ci)
OUT=$(python3 "$W/bin/outdir.py" "$DIR")
BROWSER=$(python3 "$W/bin/outdir.py" --browser)
[ -x "$BROWSER" ] || (cd "$ROOT" && npx remotion browser ensure)
R=(--browser-executable="$BROWSER")
cd "$DIR"
ID=$(node -p "require('./src/episode.json').id")
NAME=$(node -p "const e=require('./src/episode.json'); e.id+'-'+e.title")
VIDEO="$OUT/$NAME.mp4"
STEPS=("$@")
[ ${#STEPS[@]} -eq 0 ] && STEPS=(voice video covers verify)

bundled=0
bundle() {
	[ $bundled = 1 ] && return
	npx tsc --noEmit -p .
	npx remotion bundle --out-dir="$OUT/.bundle" --bundle-cache=false --log=error > /dev/null
	bundled=1
}

for step in "${STEPS[@]}"; do
	echo "== $step"
	case $step in
	voice) node scripts/voice.mjs ;;
	stills)
		bundle
		rm -rf "$OUT/stills"
		n=$(node -p "Object.values(require('./src/narration.json')).reduce((s, x) => s + x.lines.length, 0)")
		npx remotion render "$OUT/.bundle" Stills "$OUT/stills" --sequence --frames=0-$((n - 1)) --image-format=jpeg --scale=0.5 --concurrency=2 "${R[@]}" --log=error
		node "$W/bin/name-stills.mjs" "$DIR" "$OUT/stills"
		;;
	video)
		bundle
		npx remotion render "$OUT/.bundle" Video "$VIDEO" --concurrency=2 "${R[@]}" --log=error
		;;
	covers)
		bundle
		for c in 16x9 4x3 3x4; do npx remotion still "$OUT/.bundle" "Cover$c" "$OUT/cover-$c.png" "${R[@]}" --log=error > /dev/null; done
		ls "$OUT"/cover-*.png
		;;
	verify)
		npx remotion ffprobe -v error -show_entries format=duration:stream=codec_name,width,height -of compact "$VIDEO"
		echo "silences >= 2s:"
		npx remotion ffmpeg -hide_banner -nostats -i "$VIDEO" -vn -af silencedetect=n=-45dB:d=2 -f null - 2>&1 | grep -o 'silence_end: [0-9.]* | silence_duration: [0-9.]*' || echo "  none"
		;;
	done)
		EPISODE_LIST="${EPISODE_LIST:-$(dirname "$(dirname "$DIR")")/list.md}" python3 "$W/bin/mark-done.py" "$ID" "$VIDEO"
		;;
	*) echo "unknown step: $step" >&2; exit 1 ;;
	esac
done
