import React from 'react';
import {AutoScene} from '../components/auto';

export const Mech: React.FC = () => <AutoScene k="me" d={{"tag": "考点二", "title": "机械能", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "b1", "text": "{动能}", "size": 40}]}, {"blocks": [{"t": "big", "at": "b1", "text": "{重力势能|orange}", "size": 40, "c": "orange", "soft": "orangeSoft"}]}, {"blocks": [{"t": "big", "at": "b1", "text": "{弹性势能|orange}", "size": 40, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "b2", "text": "重力或弹力做功：动能 ⇄ {势能}", "size": 34}], "callout": {"label": "要点", "at": "b4", "text": "E = {E_k + E_p}"}}} />;
