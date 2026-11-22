import React from 'react';
import {AutoScene} from '../components/auto';

export const Ph: React.FC = () => <AutoScene k="ph" d={{"tag": "考点二", "title": "控制 pH 的目的", "blocks": [{"t": "big", "at": "ph1", "text": "杂质{沉淀完全}，目标离子{不沉淀}", "size": 42}, {"t": "text", "at": "ph2", "text": "pH 范围：Fe^3+ {沉淀完全} ≤ pH < Zn^2+ {开始沉淀}", "size": 33, "center": true}, {"t": "rule", "tag": "试剂", "at": "ph3", "text": "{ZnO、Zn(OH)2、ZnCO3}：不引入新杂质", "c": "orange", "size": 31}], "callout": {"label": "易错", "at": "ph4", "text": "pH 太高：目标离子{一起沉淀}"}, "beat": {"k": "duo", "at": "ph3b", "text": "pH 像一扇门\n{只放杂质出去|red}"}}} />;
