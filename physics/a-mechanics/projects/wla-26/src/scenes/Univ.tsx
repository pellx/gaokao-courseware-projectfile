import React from 'react';
import {AutoScene} from '../components/auto';

export const Univ: React.FC = () => <AutoScene k="univ" d={{"tag": "考点八", "title": "动量守恒定律的普适性", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "牛顿运动定律", "at": "u1", "lines": ["宏观", "低速"], "c": "orange", "size": 34}]}, {"blocks": [{"t": "panel", "title": "动量守恒定律", "at": "u2", "lines": ["宏观、微观", "低速、{高速}"], "c": "red", "size": 34}]}]}, {"t": "big", "at": "u3", "text": "自然界{普遍适用}的基本规律", "size": 42}], "callout": {"label": "要点", "at": "u4", "text": "适用范围{更广}"}, "beat": {"k": "band", "at": "u3b", "text": "天体、粒子\n动量守恒{都成立|red}"}}} />;
