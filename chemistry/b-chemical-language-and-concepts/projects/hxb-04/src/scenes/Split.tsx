import React from 'react';
import {AutoScene} from '../components/auto';

export const Split: React.FC = () => <AutoScene k="split" d={{"tag": "考点三", "title": "拆分原则", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "拆成离子", "at": "sp1", "lines": ["强酸：HCl、H2SO4（稀）、HNO3", "强碱：NaOH、KOH、Ba(OH)2", "{可溶性盐}"], "c": "green"}]}, {"blocks": [{"t": "panel", "title": "保留化学式", "at": "sp2", "lines": ["弱酸、弱碱、H2O", "沉淀：{CaCO3}、Cu(OH)2", "气体、单质、氧化物"], "c": "red"}]}]}, {"t": "rule", "tag": "微溶物", "at": "sp3", "text": "澄清石灰水 → 拆；石灰乳 → {Ca(OH)2 不拆}", "c": "orange"}, {"t": "rule", "tag": "酸式根", "at": "sp4", "text": "{HCO3^-} 不拆；浓硫酸写化学式", "c": "brown"}], "callout": {"label": "易错", "at": "sp5", "text": "CaCO3 + 2H^+ = Ca^2+ + CO2↑ + H2O（{CaCO3 不拆}）"}}} />;
