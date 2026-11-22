#!/usr/bin/env bash
# Creates an episode project from the template.
#   bin/new-episode.sh <ID> <dir under ~/gaokao-courseware-projectfile, or an absolute path>
#   e.g. bin/new-episode.sh XB1-01 biology/selective-1/projects/xb1-01
set -euo pipefail
W=$(cd "$(dirname "$0")/.." && pwd)
ID=$1
case $2 in /*) DIR=$2 ;; *) DIR=$HOME/gaokao-courseware-projectfile/$2 ;; esac
if [ -e "$DIR" ]; then echo "$DIR already exists" >&2; exit 1; fi
mkdir -p "$DIR"
(cd "$W/template" && tar cf - --exclude=./node_modules .) | (cd "$DIR" && tar xf -)
# No node_modules in the project: it uses the shared one at the repository root.
sed -i "s/\"id\": \"XB1-00\"/\"id\": \"$ID\"/" "$DIR/src/episode.json"
echo "Created $DIR"
