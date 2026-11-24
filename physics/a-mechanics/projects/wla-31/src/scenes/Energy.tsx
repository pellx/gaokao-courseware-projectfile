import React from 'react';
import {AutoScene} from '../components/auto';

export const Energy: React.FC = () => <AutoScene k="energy" d={{"tag": "考点八", "title": "单摆的能量", "blocks": [{"t": "chain", "steps": [{"at": "e1", "text": "重力势能"}, {"at": "e1", "text": "{动能}"}, {"at": "e1", "text": "重力势能"}], "arrows": ["向下摆", "向上摆"]}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "最低点", "at": "e2", "lines": ["速度{最大}", "动能最大"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "最高点", "at": "e2", "lines": ["速度为 0", "势能{最大}"], "c": "orange", "size": 32}]}]}, {"t": "text", "at": "e3", "text": "不计阻力：机械能守恒", "size": 32}], "callout": {"label": "要点", "at": "e4", "text": "最低点 {v = √(2gh)}"}}} />;
