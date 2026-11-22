import React from 'react';
import {AutoScene} from '../components/auto';

export const Compare: React.FC = () => <AutoScene k="cmp" d={{"tag": "考点二", "title": "速率大小比较", "blocks": [{"t": "big", "at": "cm2", "text": "比较 {v ÷ 计量数}", "size": 46}, {"t": "panel", "title": "例：A + 3B = 2C", "at": "cm3", "lines": ["v(A) = 0.15 → 0.15", "v(B) = 0.6 → 0.6 ÷ 3 = {0.2}", "v(C) = 0.4 → 0.4 ÷ 2 = {0.2}"], "c": "orange", "size": 32}], "callout": {"label": "易错", "at": "cm4", "text": "单位统一：mol/(L·s) → mol/(L·min) {乘 60}"}, "beat": {"k": "fly", "at": "cm3b", "text": "比快慢\n先换{同一把尺子|red}"}}} />;
