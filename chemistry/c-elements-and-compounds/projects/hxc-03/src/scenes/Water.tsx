import React from 'react';
import {AutoScene} from '../components/auto';

export const Water: React.FC = () => <AutoScene k="water" d={{"tag": "考点三", "title": "氯气与水", "blocks": [{"t": "big", "at": "wa1", "text": "Cl2 + H2O ⇌ HCl + {HClO}", "size": 46}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "三种分子", "at": "wa2", "lines": ["{Cl2}（使氯水呈黄绿色）", "H2O", "{HClO}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "四种离子", "at": "wa2", "lines": ["H^+、Cl^-", "ClO^-", "OH^-（极少）"], "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "wa4", "text": "Cl2 + H2O ⇌ H^+ + Cl^- + {HClO}（HClO 不拆）"}, "beat": {"k": "soda", "at": "wa2b", "text": "黄绿色的一大杯\n{同时有好几种粒子|red}"}}} />;
