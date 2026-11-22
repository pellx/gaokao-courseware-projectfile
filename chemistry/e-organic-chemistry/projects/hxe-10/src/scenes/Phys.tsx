import React from 'react';
import {AutoScene} from '../components/auto';

export const Phys: React.FC = () => <AutoScene k="phys" d={{"tag": "考点一", "title": "醇的分类与物理性质", "blocks": [{"t": "rule", "tag": "醇", "at": "ph1", "text": "—OH 连在{饱和碳}上；一元、二元、三元醇", "c": "red", "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "沸点", "at": "ph2", "text": "分子间{氢键}，高于相近烷烃", "c": "red", "size": 31}]}, {"blocks": [{"t": "rule", "tag": "溶解性", "at": "ph3", "text": "与水形成氢键；碳链长溶解度{小|orange}", "c": "orange", "size": 31}]}]}], "callout": {"label": "考法", "at": "ph4", "text": "沸点高：{分子间存在氢键}"}}} />;
