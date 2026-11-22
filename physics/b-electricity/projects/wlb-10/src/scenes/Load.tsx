import React from 'react';
import {AutoScene} from '../components/auto';

export const Load: React.FC = () => <AutoScene k="load" d={{"tag": "考点六", "title": "路端电压与负载的关系", "blocks": [{"t": "rule", "tag": "R 增大", "at": "f1", "text": "I 减小 → U 增大", "c": "red", "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "断路", "at": "f2", "lines": ["I = 0", "U = {E}"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "短路", "at": "f3", "lines": ["R = 0", "I = {E/r}，很大"], "c": "red", "size": 32}]}]}], "callout": {"label": "易错", "at": "f4", "text": "绝不允许把电源两极{直接相连}"}}} />;
