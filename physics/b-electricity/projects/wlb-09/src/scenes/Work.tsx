import React from 'react';
import {AutoScene} from '../components/auto';

export const Work: React.FC = () => <AutoScene k="work" d={{"tag": "考点一", "title": "电功", "blocks": [{"t": "rule", "tag": "实质", "at": "a1", "text": "恒定电场对自由电荷的{静电力做功}", "c": "red", "size": 34}, {"t": "rule", "tag": "能量", "at": "a2", "text": "电能 → {其他形式的能}", "c": "orange", "size": 34}, {"t": "big", "at": "a3", "text": "W = {UIt}", "size": 60}], "callout": {"label": "要点", "at": "a4", "text": "1 kW·h = {3.6×10^6 J}"}, "beat": {"k": "cheer", "at": "a3b", "text": "电流做功\n= {能量转化|red}"}}} />;
