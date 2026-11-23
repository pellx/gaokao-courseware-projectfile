import React from 'react';
import {AutoScene} from '../components/auto';

export const Size: React.FC = () => <AutoScene k="size" d={{"tag": "考点三", "title": "洛伦兹力的大小", "blocks": [{"t": "chain", "steps": [{"at": "c2", "text": "F_安 = IlB", "c": "orange"}, {"at": "c2", "text": "I = nqSv", "c": "orange"}, {"at": "c3", "text": "F = F_安 / nSl", "c": "red"}], "arrows": []}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "v ⊥ B", "at": "c3", "lines": ["F = {qvB}"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "v ∥ B", "at": "c3", "lines": ["F = {0}"], "c": "orange", "size": 34}]}]}], "callout": {"label": "要点", "at": "c4", "text": "F = {qvB sinθ}"}, "beat": {"k": "pile", "at": "c2b", "text": "总力平分给\n{每个电荷|red}"}}} />;
