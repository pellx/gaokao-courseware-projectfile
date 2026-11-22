import React from 'react';
import {AutoScene} from '../components/auto';

export const Double: React.FC = () => <AutoScene k="double" d={{"tag": "考点六", "title": "双水解", "blocks": [{"t": "big", "at": "do2", "text": "Al^3+ + 3HCO3^- = {Al(OH)3↓ + 3CO2↑}", "size": 42}, {"t": "rule", "tag": "不能共存", "at": "do3", "text": "Al^3+ 与 HCO3^-、CO3^2-、S^2-；Fe^3+ 与 HCO3^-、CO3^2-", "c": "orange", "size": 31}], "callout": {"label": "易错", "at": "do4", "text": "CH3COONH4：促进但{不彻底}，接近中性"}, "beat": {"k": "cheek", "at": "do2b", "text": "两种离子{互相促进|red}\n水解彻底"}}} />;
