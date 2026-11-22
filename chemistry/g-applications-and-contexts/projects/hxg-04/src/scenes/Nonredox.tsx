import React from 'react';
import {AutoScene} from '../components/auto';

export const Nonredox: React.FC = () => <AutoScene k="nonredox" d={{"tag": "考点六", "title": "陌生非氧化还原方程式", "blocks": [{"t": "items", "items": [{"at": "nr2", "text": "沉淀转化：MnS + Cu^2+ = {CuS} + Mn^2+"}, {"at": "nr2", "text": "碳酸氢盐沉淀：Mn^2+ + 2HCO3^- = {MnCO3↓ + CO2↑} + H2O"}, {"at": "nr3", "text": "双水解：Al^3+ + 3HCO3^- = Al(OH)3↓ + 3CO2↑"}], "size": 32}], "callout": {"label": "易错", "at": "nr4", "text": "HCO3^- 沉淀金属：同时放出 {CO2}"}}} />;
