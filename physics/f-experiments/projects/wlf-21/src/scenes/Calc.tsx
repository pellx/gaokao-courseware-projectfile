import React from 'react';
import {AutoScene} from '../components/auto';

export const Calc: React.FC = () => <AutoScene k="calc" d={{"tag": "考点七", "title": "计算与结果", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "c1", "text": "d = {V/S}", "size": 72}]}, {"blocks": [{"t": "rule", "tag": "单位", "at": "c2", "text": "V 用 m^3，S 用 m^2，d 就是 {m}", "c": "red", "size": 30}]}]}, {"t": "big", "at": "c3", "text": "数量级：{10^-10 m}", "size": 64}], "callout": {"label": "要点", "at": "c4", "text": "只是{估测}，重在{数量级}"}, "beat": {"k": "chick", "at": "c2b", "text": "一只挨一只，只铺一层\n厚度 = {分子直径|red}"}}} />;
