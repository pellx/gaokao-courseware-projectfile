import React from 'react';
import {AutoScene} from '../components/auto';

export const Conc: React.FC = () => <AutoScene k="conc" d={{"tag": "考点一", "title": "物质的量浓度", "blocks": [{"t": "big", "at": "cc1", "text": "c = n / V　（V 是{溶液}的体积，单位 L）", "size": 46}, {"t": "mark", "ok": false, "at": "cc2", "text": "58.5 g NaCl 溶于 1 L 水 → 1 mol/L（溶液体积不是 1 L）", "size": 32}, {"t": "mark", "ok": true, "at": "cc3", "text": "从 1 mol/L 溶液中取出 10 mL，浓度{仍是 1 mol/L}", "size": 32}], "callout": {"label": "易错", "at": "cc4", "text": "用 CuSO4·5H2O 配制：n = m ÷ {250 g/mol}"}, "beat": {"k": "tea", "at": "cc3b", "text": "从一壶茶里倒出一杯\n{浓度不变|red}"}}} />;
