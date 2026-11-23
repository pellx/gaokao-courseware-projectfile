import React from 'react';
import {AutoScene} from '../components/auto';

export const Pfv: React.FC = () => <AutoScene k="pfv" d={{"tag": "考点六", "title": "功率与速度", "blocks": [{"t": "big", "at": "f1", "text": "P = {Fv}", "size": 64}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "平均", "at": "f2", "text": "v 平均 → P {平均}", "c": "orange", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "瞬时", "at": "f3", "text": "v 瞬时 → P {瞬时}", "c": "red", "size": 32}]}]}], "callout": {"label": "要点", "at": "f4", "text": "P = Fv：平均、瞬时{都能求}"}}} />;
