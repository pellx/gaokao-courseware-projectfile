import React from 'react';
import {AutoScene} from '../components/auto';

export const Leach: React.FC = () => <AutoScene k="leach" d={{"tag": "考点五", "title": "浸出", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "酸浸", "at": "le1", "text": "金属氧化物、碳酸盐", "c": "red", "size": 31}]}, {"blocks": [{"t": "rule", "tag": "碱浸", "at": "le1", "text": "{Al2O3、SiO2}", "c": "orange", "size": 31}]}]}, {"t": "big", "at": "le2", "text": "粉碎 · {适当升温} · {适当增大浓度} · 搅拌", "size": 38}, {"t": "text", "at": "le3", "text": "加 H2O2 或 SO2：MnO2 → {Mn^2+}（还原浸出）", "size": 32, "center": true}], "callout": {"label": "答题模板", "at": "le4", "text": "写两三条：粉碎、{适当}升温、{适当}增大浓度、搅拌"}}} />;
