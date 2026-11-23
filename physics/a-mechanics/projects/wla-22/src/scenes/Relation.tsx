import React from 'react';
import {AutoScene} from '../components/auto';

export const Relation: React.FC = () => <AutoScene k="rel" d={{"tag": "考点三", "title": "重力做功与重力势能变化", "blocks": [{"t": "big", "at": "c1", "text": "W_G = {E_p1 − E_p2}", "size": 56}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "正功", "at": "c2", "text": "重力势能{减少}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "负功", "at": "c3", "text": "重力势能{增加}", "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "c4", "text": "W_G = 重力势能的{减少量}"}}} />;
