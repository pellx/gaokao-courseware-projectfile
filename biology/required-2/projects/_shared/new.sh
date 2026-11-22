#!/usr/bin/env bash
# new.sh NN  → ~/gaokao-courseware-projectfile/biology/required-2/projects/bx2-NN from the template, plus the 必修2 shared files.
set -euo pipefail
S=$(cd "$(dirname "$0")" && pwd)
~/gaokao-courseware-projectfile/explainer-workflow/bin/new-episode.sh BX2-$1 biology/required-2/projects/bx2-$1
"$S/sync.sh" bx2-$1
