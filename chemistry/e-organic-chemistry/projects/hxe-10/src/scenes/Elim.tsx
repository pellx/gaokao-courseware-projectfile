import React from 'react';
import {AutoScene} from '../components/auto';

export const Elim: React.FC = () => <AutoScene k="elim" d={{"tag": "考点三", "title": "醇的消去反应", "blocks": [{"t": "big", "at": "el1", "text": "CH3CH2OH →(浓硫酸，{170 ℃}) CH2=CH2↑ + H2O", "size": 38}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "结构要求", "at": "el2", "text": "相邻碳上{有氢}", "c": "red", "size": 31}]}, {"blocks": [{"t": "rule", "tag": "140 ℃", "at": "el3", "text": "分子间脱水 → {乙醚|orange}", "c": "orange", "size": 31}]}]}], "callout": {"label": "易错", "at": "el4", "text": "温度计插入{反应液中}；NaOH 溶液除 SO2"}, "beat": {"k": "tophat", "at": "el3b", "text": "170 ℃ 消去\n140 ℃ 成醚\n{差 30 ℃ 大不同|red}"}}} />;
