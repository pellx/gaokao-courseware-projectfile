import React from 'react';
import {AutoScene} from '../components/auto';

export const Ntwo: React.FC = () => <AutoScene k="n2" d={{"tag": "考点一", "title": "氮气与氮的固定", "blocks": [{"t": "big", "at": "n21", "text": "N≡N 三键，键能大 → 化学性质{稳定}", "size": 42}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "自然固氮", "at": "n22", "lines": ["雷电：N2 + O2 ═放电═ 2NO", "豆科植物的根瘤菌"], "c": "orange", "size": 31}]}, {"blocks": [{"t": "panel", "title": "人工固氮", "at": "n23", "lines": ["N2 + 3H2 ⇌ 2NH3", "{高温、高压、催化剂}"], "c": "red", "size": 31}]}]}], "callout": {"label": "易错", "at": "n24", "text": "固氮的起点必须是 {N2}：NO → NO2 不是固氮"}, "beat": {"k": "drums", "at": "n22b", "text": "鼓边的闪电\n{雷电固氮|red}\nN2 → NO"}}} />;
