import React from 'react';
import {AutoScene} from '../components/auto';

export const Charge: React.FC = () => <AutoScene k="charge" d={{"tag": "考点三", "title": "电子电荷量的测定", "blocks": [{"t": "rule", "tag": "密立根油滴实验", "at": "c1", "text": "精确测出电子的电荷量", "c": "red"}, {"t": "big", "at": "c2", "text": "e = {1.6×10^-19 C}", "size": 56}, {"t": "items", "items": [{"at": "c3", "text": "带电体的电荷量都是 e 的{整数倍}"}, {"at": "c4", "text": "电子质量约为氢原子质量的 1/1836"}], "size": 32}], "callout": {"label": "要点", "at": "c5", "text": "电荷是{量子化}的"}}} />;
