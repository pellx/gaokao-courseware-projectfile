import React from 'react';
import {AutoScene} from '../components/auto';

export const Ionize: React.FC = () => <AutoScene k="ionize" d={{"tag": "考点七", "title": "电离", "blocks": [{"t": "rule", "tag": "电离", "at": "g1", "text": "电子脱离原子核束缚，成为{自由电子}", "c": "red"}, {"t": "big", "at": "g2", "text": "最小电离能 = {E_n 的绝对值}", "size": 56}, {"t": "text", "at": "g3", "text": "基态：{13.6 eV}；n = 2：3.4 eV", "size": 34}], "callout": {"label": "要点", "at": "g4", "text": "电离能 = 该能级能量的{绝对值}"}}} />;
