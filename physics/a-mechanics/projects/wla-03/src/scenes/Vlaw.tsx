import React from 'react';
import {AutoScene} from '../components/auto';

export const Vlaw: React.FC = () => <AutoScene k="vlaw" d={{"tag": "考点二", "title": "速度与时间的关系", "blocks": [{"t": "big", "at": "w1", "text": "v = {v_0 + at}", "size": 64}, {"t": "chain", "steps": [{"at": "w2", "text": "a = Δv/Δt"}, {"at": "w2", "text": "Δv = v − v_0"}, {"at": "w2", "text": "{v = v_0 + at}"}], "arrows": ["变形", "整理"], "size": 34}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "v_0", "at": "w3", "text": "初速度", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "at", "at": "w3", "text": "速度的{变化量}", "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "w4", "text": "v 是 t 的{一次函数}，只用于匀变速"}}} />;
