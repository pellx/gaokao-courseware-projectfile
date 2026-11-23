import React from 'react';
import {AutoScene} from '../components/auto';

export const Flat: React.FC = () => <AutoScene k="flat" d={{"tag": "考点二", "title": "平抛运动", "blocks": [{"t": "rule", "tag": "定义", "at": "b1", "text": "初速度{水平}的抛体运动", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "水平方向", "at": "b2", "lines": ["{匀速直线运动}", "v_x = v_0"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "竖直方向", "at": "b3", "lines": ["{自由落体运动}", "初速度为 0，a = g"], "c": "orange", "size": 34}]}]}], "callout": {"label": "要点", "at": "b4", "text": "两个分运动{同时、独立}"}}} />;
