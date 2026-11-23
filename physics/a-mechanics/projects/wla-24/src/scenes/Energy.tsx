import React from 'react';
import {AutoScene} from '../components/auto';

export const Energy: React.FC = () => <AutoScene k="energy" d={{"tag": "考点九", "title": "能量守恒定律", "blocks": [{"t": "rule", "tag": "能量守恒", "at": "k1", "text": "不会{凭空产生}，也不会{凭空消失}", "c": "red"}, {"t": "items", "items": [{"at": "k2", "text": "{转化}：一种形式 → 另一种形式"}, {"at": "k2", "text": "{转移}：一个物体 → 另一个物体"}, {"at": "k3", "text": "总量{保持不变}"}], "size": 32}], "callout": {"label": "要点", "at": "k4", "text": "能量守恒{普遍成立}"}, "beat": {"k": "leaves", "at": "k3b", "text": "转化、转移\n总量{不变|red}"}}} />;
