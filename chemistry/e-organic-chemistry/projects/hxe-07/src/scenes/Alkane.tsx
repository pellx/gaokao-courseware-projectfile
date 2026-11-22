import React from 'react';
import {AutoScene} from '../components/auto';

export const Alkane: React.FC = () => <AutoScene k="alkane" d={{"tag": "考点一", "title": "烷烃的性质", "blocks": [{"t": "rule", "tag": "稳定", "at": "ak1", "text": "不与酸、碱、{酸性 KMnO4} 反应", "c": "red", "size": 32}, {"t": "big", "at": "ak2", "text": "CH4 + Cl2 → CH3Cl + HCl（{光照}，取代）", "size": 38}, {"t": "text", "at": "ak3", "text": "碳数多 → 沸点高；碳数相同 → {支链越多，沸点越低}", "size": 32, "center": true}, {"t": "text", "at": "ak3b", "text": "石油：分馏（物理）、裂化、{裂解得乙烯}（化学）；煤：干馏、气化、液化（{化学变化}）", "size": 28, "center": true}], "callout": {"label": "易错", "at": "ak4", "text": "取代产物中 {HCl 最多}"}}} />;
