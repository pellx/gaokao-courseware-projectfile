import React from 'react';
import {AutoScene} from '../components/auto';

export const Equation: React.FC = () => <AutoScene k="equation" d={{"tag": "考点七", "title": "爱因斯坦光电效应方程", "blocks": [{"t": "rule", "tag": "光子说", "at": "g1", "text": "一个电子只吸收{一个光子}的能量 hν", "c": "red"}, {"t": "big", "at": "g3", "text": "E_k = hν − {W_0}", "size": 60}, {"t": "text", "at": "g4", "text": "逸出功 {W_0 = hν_c}，由金属决定", "size": 34}], "callout": {"label": "易错", "at": "g5", "text": "W_0 是逸出功的{最小值}，E_k 是{最大}初动能"}, "beat": {"k": "gift", "at": "g4b", "text": "一个电子\n只收{一个光子|red}"}}} />;
