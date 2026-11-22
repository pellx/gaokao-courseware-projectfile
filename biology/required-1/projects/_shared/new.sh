#!/usr/bin/env bash
# new.sh NN  → ~/gaokao-courseware-projectfile/biology/required-1/projects/bx1-NN from the template, plus the 必修1 shared files.
set -euo pipefail
S=$(cd "$(dirname "$0")" && pwd)
~/gaokao-courseware-projectfile/explainer-workflow/bin/new-episode.sh BX1-$1 biology/required-1/projects/bx1-$1
"$S/sync.sh" bx1-$1
