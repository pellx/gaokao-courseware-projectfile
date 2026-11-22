import React from 'react';
import {AutoScene} from '../components/auto';

export const Nuc: React.FC = () => <AutoScene k="nuc" d={{"tag": "考点五", "title": "核素符号", "blocks": [{"t": "nuc", "at": "nu1", "items": [{"A": "A", "Z": "Z", "X": "X", "note": "A：质量数　Z：质子数"}], "size": 90}, {"t": "nuc", "at": "nu2", "items": [{"A": "18", "Z": "8", "X": "O", "note": "中子数 10"}, {"A": "37", "Z": "17", "X": "Cl", "note": "中子数 20", "c": "#ee8a1f"}], "size": 80}, {"t": "big", "at": "nu3", "text": "质量数 A = 质子数 Z + 中子数 N", "size": 40}], "callout": {"label": "易错", "at": "nu4", "text": "给的是{中子数}：先加上质子数，再写到左上角"}}} />;
