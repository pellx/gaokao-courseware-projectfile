import React from 'react';
import {AutoScene} from '../components/auto';

export const Ionize: React.FC = () => <AutoScene k="ionize" d={{"tag": "考点二", "title": "电离方程式", "blocks": [{"t": "items", "items": [{"at": "io1", "text": "强：HCl = H^+ + Cl^-"}, {"at": "io1", "text": "弱：CH3COOH {⇌} CH3COO^- + H^+"}, {"at": "io2", "text": "多元弱酸{分步}：H2CO3 ⇌ H^+ + HCO3^-，HCO3^- ⇌ H^+ + CO3^2-"}, {"at": "io3", "text": "多元弱碱一步：Fe(OH)3 ⇌ Fe^3+ + 3OH^-"}], "size": 32}], "callout": {"label": "易错", "at": "io4", "text": "NaHSO4 水中拆出 H^+；NaHCO3 = Na^+ + {HCO3^-}"}}} />;
