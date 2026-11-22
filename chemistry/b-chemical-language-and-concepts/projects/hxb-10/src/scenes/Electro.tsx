import React from 'react';
import {AutoScene} from '../components/auto';

export const Electro: React.FC = () => <AutoScene k="electro" d={{"tag": "考点七", "title": "电化学方程式", "blocks": [{"t": "mark", "ok": true, "at": "el1", "text": "2Cl^- + 2H2O ═通电═ 2OH^- + H2↑ + Cl2↑", "size": 32}, {"t": "mark", "ok": true, "at": "el2", "text": "Pb + PbO2 + 2H2SO4 = 2{PbSO4} + 2H2O（放电）", "size": 32}, {"t": "mark", "ok": true, "at": "el3", "text": "正极 O2 + 2H2O + 4e^- = 4OH^-", "size": 32}, {"t": "mark", "ok": false, "at": "el3", "text": "负极 Fe − 3e^- = Fe^3+（应为 Fe − 2e^- = {Fe^2+}）", "size": 32}], "callout": {"label": "易错", "at": "el4", "text": "电解写“{通电}”；钢铁腐蚀负极生成 {Fe^2+}"}}} />;
