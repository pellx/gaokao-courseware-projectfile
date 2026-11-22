import React from 'react';
import {AutoScene} from '../components/auto';

export const Flow: React.FC = () => <AutoScene k="flow" d={{"tag": "考点五", "title": "流程中的铝〔课外〕", "blocks": [{"t": "rule", "tag": "碱溶", "at": "fl1", "text": "NaOH 溶解 Al、Al2O3；Fe2O3 不溶 → {过滤分开}", "c": "red", "size": 30}, {"t": "big", "at": "fl2", "text": "[Al(OH)4]^- + CO2（过量）= Al(OH)3↓ + HCO3^-", "size": 36}, {"t": "big", "at": "fl3", "text": "Al^3+ + 3NH3·H2O = Al(OH)3↓ + 3NH4^+", "size": 36, "c": "orange", "soft": "orangeSoft"}], "callout": {"label": "解题方法", "at": "fl4", "text": "沉淀 Al(OH)3 用{弱酸 CO2 或弱碱氨水}"}}} />;
