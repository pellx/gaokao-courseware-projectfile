import React from 'react';
import {AutoScene} from '../components/auto';

export const Constant: React.FC = () => <AutoScene k="g" d={{"tag": "考点九", "title": "引力常量与定律的意义", "blocks": [{"t": "rule", "tag": "卡文迪什", "at": "m1", "text": "{扭秤实验}测出 G", "c": "red"}, {"t": "big", "at": "m2", "text": "G ≈ {6.67×10^−11} N·m^2/kg^2", "size": 44}, {"t": "text", "at": "m3", "text": "天上、地上的物体遵从{同一规律}", "size": 32}], "callout": {"label": "易错", "at": "m4", "text": "定律：{牛顿}；测 G：{卡文迪什}"}, "beat": {"k": "lab", "at": "m3b", "text": "G 靠{扭秤实验|red}测出"}}} />;
