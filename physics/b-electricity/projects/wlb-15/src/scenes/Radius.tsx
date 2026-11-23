import React from 'react';
import {AutoScene} from '../components/auto';

export const Radius: React.FC = () => <AutoScene k="radius" d={{"tag": "考点三", "title": "轨道半径", "blocks": [{"t": "big", "at": "c1", "text": "r = {mv/qB}", "size": 60}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "半径越大", "at": "c3", "lines": ["速度 v {越大}", "比荷 q/m {越小}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "半径越小", "at": "c4", "lines": ["磁感应强度 B {越大}"], "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "c5", "text": "r ∝ v，与比荷和 B 成{反比}"}}} />;
