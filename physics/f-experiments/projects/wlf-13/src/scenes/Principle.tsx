import React from 'react';
import {AutoScene} from '../components/auto';

export const Principle: React.FC = () => <AutoScene k="principle" d={{"tag": "考点一", "title": "实验原理", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "a1", "text": "R = ρl / S", "size": 44}]}, {"blocks": [{"t": "big", "at": "a2", "text": "S = πd^2 / 4", "size": 44, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "big", "at": "a3", "text": "{ρ = πd^2R / 4l}", "size": 60}], "callout": {"label": "要点", "at": "a4", "text": "测出 {R}、{l}、{d} 三个量"}, "beat": {"k": "labcoat", "at": "a3b", "text": "公式推出来了\n把 {R、l、d|red} 测准"}}} />;
