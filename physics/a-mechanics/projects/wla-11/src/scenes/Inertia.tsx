import React from 'react';
import {AutoScene} from '../components/auto';

export const Inertia: React.FC = () => <AutoScene k="inertia" d={{"tag": "考点七", "title": "惯性", "blocks": [{"t": "rule", "tag": "惯性", "at": "g1", "text": "保持原来{运动状态}的性质", "c": "red"}, {"t": "text", "at": "g2", "text": "牛顿第一定律 = {惯性定律}", "size": 34}, {"t": "big", "at": "g3", "text": "质量是惯性大小的{唯一量度}", "size": 44}], "callout": {"label": "要点", "at": "g4", "text": "惯性只由{质量}决定"}, "beat": {"k": "daifuku", "at": "g3b", "text": "质量越大\n运动状态{越难改变|red}"}}} />;
