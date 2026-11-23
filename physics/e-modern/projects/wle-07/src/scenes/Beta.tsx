import React from 'react';
import {AutoScene} from '../components/auto';

export const Beta: React.FC = () => <AutoScene k="beta" d={{"tag": "考点六", "title": "β 衰变", "blocks": [{"t": "nuc", "at": "f1", "items": [{"A": "234", "Z": "90", "X": "Th"}, {"A": "", "Z": "", "X": "→"}, {"A": "234", "Z": "91", "X": "Pa"}, {"A": "", "Z": "", "X": "+"}, {"A": "0", "Z": "−1", "X": "e", "c": "orange"}], "size": 80}, {"t": "text", "at": "f2", "text": "质量数{不变}，电荷数{ + 1}", "size": 36}, {"t": "rule", "tag": "实质", "at": "f3", "text": "中子 → {质子 + 电子}", "c": "orange"}], "callout": {"label": "易错", "at": "f4", "text": "β 电子来自{原子核}，不是核外电子"}}} />;
