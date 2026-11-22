import React from 'react';
import {AutoScene} from '../components/auto';

export const Cl: React.FC = () => <AutoScene k="cl" d={{"tag": "考点四", "title": "Cl^- 的检验", "blocks": [{"t": "chain", "steps": [{"at": "cl1", "text": "待测液"}, {"at": "cl1", "text": "稀 {HNO3}\n酸化", "c": "red"}, {"at": "cl1", "text": "AgNO3 溶液\n白色沉淀", "c": "orange"}], "arrows": [], "center": true, "size": 38}, {"t": "rule", "tag": "目的", "at": "cl2", "text": "排除 {CO3^2-} 干扰（Ag2CO3 溶于稀硝酸）", "c": "orange", "size": 31}, {"t": "rule", "tag": "有 SO4^2- 时", "at": "cl3", "text": "先加足量 {Ba(NO3)2} 除去，过滤后再检验", "c": "brown", "size": 31}], "callout": {"label": "易错", "at": "cl4", "text": "不能用{盐酸}酸化：会引入 Cl^-"}}} />;
