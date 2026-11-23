import React from 'react';
import {AutoScene} from '../components/auto';

export const Reaction: React.FC = () => <AutoScene k="reaction" d={{"tag": "考点九", "title": "核反应与核反应方程", "blocks": [{"t": "nuc", "at": "i2", "items": [{"A": "14", "Z": "7", "X": "N"}, {"A": "", "Z": "", "X": "+"}, {"A": "4", "Z": "2", "X": "He"}, {"A": "", "Z": "", "X": "→"}, {"A": "17", "Z": "8", "X": "O"}, {"A": "", "Z": "", "X": "+"}, {"A": "1", "Z": "1", "X": "H", "c": "orange"}], "size": 72}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "i3", "text": "质量数\n{守恒}", "size": 44}]}, {"blocks": [{"t": "big", "at": "i3", "text": "电荷数\n{守恒}", "size": 44}]}]}], "callout": {"label": "易错", "at": "i4", "text": "用{箭头}连接，不用等号"}}} />;
