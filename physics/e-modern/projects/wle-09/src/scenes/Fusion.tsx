import React from 'react';
import {AutoScene} from '../components/auto';

export const Fusion: React.FC = () => <AutoScene k="fusion" d={{"tag": "考点五", "title": "轻核聚变", "blocks": [{"t": "nuc", "at": "e2", "items": [{"A": "2", "Z": "1", "X": "H"}, {"A": "", "Z": "", "X": "+"}, {"A": "3", "Z": "1", "X": "H"}, {"A": "", "Z": "", "X": "→"}, {"A": "4", "Z": "2", "X": "He"}, {"A": "", "Z": "", "X": "+"}, {"A": "1", "Z": "0", "X": "n", "c": "orange"}], "size": 72}, {"t": "rule", "tag": "聚变", "at": "e1", "text": "轻核 → {质量较大}的核", "c": "red"}], "callout": {"label": "要点", "at": "e4", "text": "裂变{分开}，聚变{结合}"}, "beat": {"k": "fuse", "at": "e3b", "text": "两个合成一个\n{聚变|red}"}}} />;
