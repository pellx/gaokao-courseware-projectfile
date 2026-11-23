import React from 'react';
import {AutoScene} from '../components/auto';

export const Time: React.FC = () => <AutoScene k="time" d={{"tag": "考点六", "title": "飞行时间与水平射程", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "飞行时间", "at": "f1", "lines": ["t = √(2h/g)", "只由 {h} 决定"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "水平射程", "at": "f3", "lines": ["x = v_0√(2h/g)", "由 {v_0 和 h} 决定"], "c": "orange", "size": 34}]}]}], "callout": {"label": "易错", "at": "f4", "text": "同高度平抛：射程不同，{时间相同}"}}} />;
