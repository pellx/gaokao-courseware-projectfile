import React from 'react';
import {AutoScene} from '../components/auto';

export const Proton: React.FC = () => <AutoScene k="proton" d={{"tag": "考点四", "title": "质子守恒", "blocks": [{"t": "big", "at": "pr2", "text": "Na2CO3：c(OH^-) = c(H^+) + c(HCO3^-) + {2c(H2CO3)}", "size": 38}, {"t": "chain", "steps": [{"at": "pr3", "text": "电荷守恒"}, {"at": "pr3", "text": "物料守恒"}, {"at": "pr3", "text": "{质子守恒}"}], "arrows": ["联立", "消去 c(Na^+)"], "center": true, "size": 36}], "callout": {"label": "解题方法", "at": "pr4", "text": "质子守恒 = {电荷守恒与物料守恒联立}"}, "beat": {"k": "three", "at": "pr3b", "text": "电荷、物料、质子\n{前两个联立得第三个|red}"}}} />;
