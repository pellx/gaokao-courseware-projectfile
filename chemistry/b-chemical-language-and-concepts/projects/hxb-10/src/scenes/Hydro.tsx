import React from 'react';
import {AutoScene} from '../components/auto';

export const Hydro: React.FC = () => <AutoScene k="hydro" d={{"tag": "考点八", "title": "水解与沉淀转化", "blocks": [{"t": "mark", "ok": true, "at": "hy1", "text": "CO3^2- + H2O ⇌ HCO3^- + OH^-（{分步}，可逆号）", "size": 32}, {"t": "mark", "ok": true, "at": "hy2", "text": "Fe^3+ + 3H2O ═△═ Fe(OH)3（{胶体}）+ 3H^+", "size": 32}, {"t": "mark", "ok": true, "at": "hy3", "text": "AgCl(s) + I^-(aq) ⇌ {AgI(s)} + Cl^-(aq)", "size": 32}, {"t": "mark", "ok": false, "at": "hy4", "text": "CO3^2- + 2H2O ⇌ H2CO3 + 2OH^-（一步水解到碳酸）", "size": 32}], "callout": {"label": "易错", "at": "hy4", "text": "多元弱酸根{分步水解}；胶体不写“↓”"}, "beat": {"k": "glass", "at": "hy3b", "text": "专挑细节\n{可逆号、分步、状态|red}"}}} />;
