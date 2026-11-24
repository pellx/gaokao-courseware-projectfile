import React from 'react';
import {AutoScene} from '../components/auto';

export const Principle: React.FC = () => <AutoScene k="principle" d={{"tag": "考点一", "title": "实验原理", "blocks": [{"t": "big", "at": "a1", "text": "{E = U + Ir}", "size": 64}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "a3", "text": "E = U_1 + I_1 r", "size": 40, "c": "orange", "soft": "orangeSoft"}]}, {"blocks": [{"t": "big", "at": "a3", "text": "E = U_2 + I_2 r", "size": 40, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "a3", "text": "两个方程，解出 {E} 和 {r}", "size": 34, "center": true}], "callout": {"label": "要点", "at": "a4", "text": "实际测{多组数据}，用图像处理"}}} />;
