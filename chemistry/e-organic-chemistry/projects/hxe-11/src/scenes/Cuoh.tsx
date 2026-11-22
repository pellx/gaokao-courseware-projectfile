import React from 'react';
import {AutoScene} from '../components/auto';

export const Cuoh: React.FC = () => <AutoScene k="cuoh" d={{"tag": "考点四", "title": "与新制 Cu(OH)2 反应", "blocks": [{"t": "rule", "tag": "配制", "at": "cu1", "text": "过量 NaOH 中加少量 CuSO4：{碱要过量}", "c": "red", "size": 32}, {"t": "big", "at": "cu2", "text": "RCHO ～ {Cu2O↓}（砖红色）", "size": 44}, {"t": "text", "at": "cu3", "text": "{现配现用}，加热至沸腾", "size": 32, "center": true}], "callout": {"label": "易错", "at": "cu4", "text": "1 mol —CHO ～ {1 mol Cu2O}；碱必须过量"}, "beat": {"k": "curls", "at": "cu3b", "text": "必须{碱性|red}\n才见砖红色"}}} />;
