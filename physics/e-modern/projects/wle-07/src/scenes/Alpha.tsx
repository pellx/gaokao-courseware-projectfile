import React from 'react';
import {AutoScene} from '../components/auto';

export const Alpha: React.FC = () => <AutoScene k="alpha" d={{"tag": "考点五", "title": "α 衰变", "blocks": [{"t": "nuc", "at": "e3", "items": [{"A": "238", "Z": "92", "X": "U"}, {"A": "", "Z": "", "X": "→"}, {"A": "234", "Z": "90", "X": "Th"}, {"A": "", "Z": "", "X": "+"}, {"A": "4", "Z": "2", "X": "He", "c": "orange"}], "size": 80}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "e3", "text": "质量数\n{− 4}", "size": 44}]}, {"blocks": [{"t": "big", "at": "e3", "text": "电荷数\n{− 2}", "size": 44}]}]}], "callout": {"label": "要点", "at": "e4", "text": "α 衰变：质量数 {−4}，电荷数 {−2}"}, "beat": {"k": "henshin", "at": "e3b", "text": "衰变 = {变身|red}\n成新元素"}}} />;
