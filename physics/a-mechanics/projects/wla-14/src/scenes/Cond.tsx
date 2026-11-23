import React from 'react';
import {AutoScene} from '../components/auto';

export const Cond: React.FC = () => <AutoScene k="cond" d={{"tag": "考点二", "title": "做曲线运动的条件", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "曲线运动", "at": "b1", "lines": ["F合 与 v {不共线}"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "直线运动", "at": "b3", "lines": ["F合 与 v {共线}"], "c": "orange", "size": 34}]}]}, {"t": "text", "at": "b2", "text": "等价说法：a 与 v 不共线", "size": 32}], "callout": {"label": "要点", "at": "b4", "text": "看 F合（a）与 v {是否共线}"}}} />;
