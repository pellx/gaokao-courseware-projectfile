import React from 'react';
import {AutoScene} from '../components/auto';

export const Ketone: React.FC = () => <AutoScene k="ketone" d={{"tag": "考点六", "title": "酮的性质", "blocks": [{"t": "rule", "tag": "丙酮", "at": "ke1", "text": "CH3COCH3，常用{有机溶剂}", "c": "red", "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": false, "at": "ke2", "text": "银氨溶液、新制 Cu(OH)2", "size": 31}]}, {"blocks": [{"t": "mark", "ok": true, "at": "ke3", "text": "与 H2 加成 → {仲醇}", "size": 31}]}]}], "callout": {"label": "易错", "at": "ke4", "text": "丙醛与丙酮：用{银镜反应}区分"}, "beat": {"k": "dots", "at": "ke3b", "text": "酮遇银氨溶液\n{没反应|red}"}}} />;
