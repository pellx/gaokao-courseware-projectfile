import React from 'react';
import {AutoScene} from '../components/auto';

export const Split: React.FC = () => <AutoScene k="split" d={{"tag": "考点三", "title": "二查：拆分是否正确", "blocks": [{"t": "mark", "ok": true, "at": "sp1", "text": "Cl2 + H2O ⇌ H^+ + Cl^- + {HClO}", "size": 32}, {"t": "mark", "ok": true, "at": "sp2", "text": "2{CH3COOH} + {CaCO3} = Ca^2+ + 2CH3COO^- + CO2↑ + H2O", "size": 32}, {"t": "rule", "tag": "不拆", "at": "sp3", "text": "Mg(OH)2、Al(OH)3、BaSO4、NH3·H2O、HClO、CH3COOH", "c": "red", "size": 30}], "callout": {"label": "易错", "at": "sp4", "text": "Cl2 + H2O = 2H^+ + Cl^- + ClO^- 错：{HClO 不拆}"}}} />;
