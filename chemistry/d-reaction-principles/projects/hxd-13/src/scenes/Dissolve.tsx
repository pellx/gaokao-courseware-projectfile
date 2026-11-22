import React from 'react';
import {AutoScene} from '../components/auto';

export const Dissolve: React.FC = () => <AutoScene k="dissolve" d={{"tag": "考点六", "title": "沉淀的溶解", "blocks": [{"t": "big", "at": "ds2", "text": "Mg(OH)2(s) ⇌ Mg^2+(aq) + 2{OH^-}(aq)", "size": 40}, {"t": "text", "at": "ds2", "text": "NH4^+ + OH^- → NH3·H2O：{c(OH^-) 减小}，平衡正移", "size": 32, "center": true}, {"t": "items", "items": [{"at": "ds3", "text": "CaCO3 溶于盐酸：H^+ 消耗 CO3^2-"}, {"at": "ds3", "text": "AgCl 溶于氨水：生成 {[Ag(NH3)2]^+|orange}"}], "size": 32}], "callout": {"label": "答题模板", "at": "ds4", "text": "写平衡 → 某离子被结合 → {浓度减小} → 平衡正移 → 溶解"}}} />;
