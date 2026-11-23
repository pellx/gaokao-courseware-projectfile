import React from 'react';
import {AutoScene} from '../components/auto';

export const Change: React.FC = () => <AutoScene k="change" d={{"tag": "考点七", "title": "机械能的变化", "blocks": [{"t": "big", "at": "g1", "text": "W_其他 = {E_2 − E_1}", "size": 56}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "正功", "at": "g2", "text": "机械能{增加}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "负功", "at": "g3", "text": "机械能{减少}", "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "g4", "text": "其他力的功 = {机械能变化}"}}} />;
