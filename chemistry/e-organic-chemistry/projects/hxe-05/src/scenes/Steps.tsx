import React from 'react';
import {AutoScene} from '../components/auto';

export const Steps: React.FC = () => <AutoScene k="steps" d={{"tag": "考点六", "title": "书写四步法", "blocks": [{"t": "chain", "steps": [{"at": "sp1", "text": "{算 Ω}"}, {"at": "sp2", "text": "翻译条件"}, {"at": "sp3", "text": "拼碳骨架"}, {"at": "sp3", "text": "调对称"}], "arrows": [], "center": true, "size": 38}, {"t": "panel", "title": "例：C8H8O2，含苯环，能发生银镜反应和水解，氢谱 4 组峰", "at": "sp3", "lines": ["Ω = 5：苯环 + 一个 C=O", "银镜 + 水解 → {甲酸酯 HCOO—}", "剩一个 C：—CH3，与 HCOO— {对位}"], "c": "orange", "size": 30}], "callout": {"label": "答题模板", "at": "sp4", "text": "写完{回头检查}：分子式、条件、峰"}, "beat": {"k": "peace", "at": "sp3b", "text": "别晕\n{一步只做一件事|red}"}}} />;
