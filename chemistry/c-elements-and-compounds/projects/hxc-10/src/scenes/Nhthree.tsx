import React from 'react';
import {AutoScene} from '../components/auto';

export const Nhthree: React.FC = () => <AutoScene k="nh3" d={{"tag": "考点四", "title": "氨的性质", "blocks": [{"t": "rule", "tag": "溶解性", "at": "nh1", "text": "{极易溶于水}（1 : 700）", "c": "red", "size": 31}, {"t": "rule", "tag": "与水", "at": "nh2", "text": "NH3 + H2O ⇌ NH3·H2O ⇌ NH4^+ + OH^-（{弱碱性|orange}）", "c": "orange", "size": 31}, {"t": "rule", "tag": "与酸", "at": "nh3", "text": "NH3 + HCl = NH4Cl（{白烟}）", "c": "brown", "size": 31}, {"t": "rule", "tag": "还原性", "at": "nh4", "text": "4NH3 + 5O2 ═催化剂、△═ {4NO} + 6H2O", "c": "green", "size": 31}], "callout": {"label": "易错", "at": "nh5", "text": "氨水中最多的是 {NH3·H2O}；NH3 是非电解质"}, "beat": {"k": "mochi", "at": "nh3b", "text": "NH3 + HCl\n= 一团{白烟|red}"}}} />;
