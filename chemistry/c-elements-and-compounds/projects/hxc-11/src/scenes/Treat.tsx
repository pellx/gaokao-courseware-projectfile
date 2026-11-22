import React from 'react';
import {AutoScene} from '../components/auto';

export const Treat: React.FC = () => <AutoScene k="treat" d={{"tag": "考点六", "title": "氮氧化物的治理", "blocks": [{"t": "rule", "tag": "SCR", "at": "tr1", "text": "4NH3 + 6NO ═催化剂═ 5N2 + 6H2O", "c": "red", "size": 31}, {"t": "rule", "tag": "三元催化", "at": "tr2", "text": "2CO + 2NO ═催化剂═ N2 + 2CO2", "c": "orange", "size": 31}, {"t": "rule", "tag": "碱液吸收", "at": "tr3", "text": "NO + NO2 + 2NaOH = 2NaNO2 + H2O（{NO 单独不被吸收}）", "c": "green", "size": 31}, {"t": "big", "at": "tr4", "text": "N：−3（NH3）→ {0} ← +2（NO）", "size": 40}], "callout": {"label": "解题方法", "at": "tr4", "text": "脱硝按{归中}配平：都变成 0 价的 N2"}}} />;
