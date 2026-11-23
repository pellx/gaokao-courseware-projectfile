import React from 'react';
import {AutoScene} from '../components/auto';

export const Dir: React.FC = () => <AutoScene k="dir" d={{"tag": "考点六", "title": "加速度的方向", "blocks": [{"t": "rule", "tag": "方向", "at": "d1", "text": "a 的方向 = {Δv 的方向}", "c": "red", "size": 38}, {"t": "text", "at": "d2", "text": "直线运动：规定正方向，用{正负号}表示方向", "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "加速", "at": "d3", "lines": ["a 与 v {同向}", "速度越来越大"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "减速", "at": "d3", "lines": ["a 与 v {反向|orange}", "速度越来越小"], "c": "orange", "size": 34}]}]}], "callout": {"label": "易错", "at": "d4", "text": "看 a 与 v 的{方向关系}，不看 a 的正负"}, "beat": {"k": "bike", "at": "d3b", "text": "蹬车：a、v {同向|red} → 加速\n捏闸：a、v {反向|orange} → 减速"}}} />;
