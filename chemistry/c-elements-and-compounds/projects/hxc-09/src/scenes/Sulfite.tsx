import React from 'react';
import {AutoScene} from '../components/auto';

export const Sulfite: React.FC = () => <AutoScene k="sulfite" d={{"tag": "考点六", "title": "亚硫酸盐与硫化物的还原性", "blocks": [{"t": "big", "at": "sl1", "text": "2Na2SO3 + O2 = 2Na2SO4（{变质}）", "size": 40}, {"t": "chain", "steps": [{"at": "sl2", "text": "Na2SO3 样品"}, {"at": "sl2", "text": "足量盐酸\n除 SO3^2-", "c": "orange"}, {"at": "sl2", "text": "BaCl2\n{白色沉淀} → 已变质", "c": "red"}], "arrows": [], "center": true, "size": 34}, {"t": "rule", "tag": "S^2-", "at": "sl3", "text": "H2S 被 SO2、Cl2、Fe^3+ 氧化成 {S}", "c": "brown", "size": 31}], "callout": {"label": "易错", "at": "sl4", "text": "直接加 BaCl2 不行（BaSO3 也是白色沉淀），{先加盐酸}"}}} />;
