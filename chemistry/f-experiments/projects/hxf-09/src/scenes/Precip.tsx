import React from 'react';
import {AutoScene} from '../components/auto';

export const Precip: React.FC = () => <AutoScene k="precip" d={{"tag": "考点三", "title": "用沉淀溶解平衡解释", "blocks": [{"t": "big", "at": "pc2", "text": "Mg(OH)2(s) ⇌ Mg^2+ + 2OH^-　NH4^+ 结合 OH^- → {溶解}", "size": 34}, {"t": "big", "at": "pc3", "text": "AgCl(s) ⇌ Ag^+ + Cl^-　I^- 结合 Ag^+ → {转化为 AgI}", "size": 34, "c": "orange", "soft": "orangeSoft"}], "callout": {"label": "解题方法", "at": "pc4", "text": "找出{哪个离子浓度被改变}"}}} />;
