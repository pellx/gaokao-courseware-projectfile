import React from 'react';
import {AutoScene} from '../components/auto';

export const Dp: React.FC = () => <AutoScene k="dp" d={{"tag": "考点三", "title": "动量的变化量", "blocks": [{"t": "big", "at": "d1", "text": "Δp = {p′ − p} = mΔv", "size": 48}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "矢量运算", "at": "d2", "text": "平行四边形定则", "c": "orange", "size": 30}]}, {"blocks": [{"t": "rule", "tag": "同一直线", "at": "d3", "text": "先{规定正方向}，再代数运算", "c": "red", "size": 30}]}]}], "callout": {"label": "要点", "at": "d4", "text": "Δp 与 {Δv} 同向"}}} />;
