import React from 'react';
import {AutoScene} from '../components/auto';

export const Equation: React.FC = () => <AutoScene k="eq" d={{"tag": "考点三", "title": "水解方程式", "blocks": [{"t": "items", "items": [{"at": "eq1", "text": "NH4^+ + H2O {⇌} NH3·H2O + H^+"}, {"at": "eq2", "text": "CO3^2- + H2O ⇌ HCO3^- + OH^-（{第一步为主}）"}, {"at": "eq2", "text": "HCO3^- + H2O ⇌ H2CO3 + OH^-"}, {"at": "eq3", "text": "Fe^3+ + 3H2O ⇌ Fe(OH)3 + 3H^+（{不标 ↓}）"}], "size": 32}], "callout": {"label": "易错", "at": "eq4", "text": "HCO3^- + H2O ⇌ H3O^+ + CO3^2- 是{电离}"}}} />;
