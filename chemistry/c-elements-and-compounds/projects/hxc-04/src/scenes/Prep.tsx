import React from 'react';
import {AutoScene} from '../components/auto';

export const Prep: React.FC = () => <AutoScene k="prep" d={{"tag": "考点一", "title": "实验室制氯气", "blocks": [{"t": "big", "at": "pr1", "text": "MnO2 + 4HCl(浓) ═△═ MnCl2 + Cl2↑ + 2H2O", "size": 40}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "条件", "at": "pr2", "text": "{浓}盐酸 + {加热}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "HCl 的作用", "at": "pr2", "text": "{还原剂|orange} + {酸性|orange}", "c": "orange", "size": 32}]}]}, {"t": "rule", "tag": "变稀", "at": "pr3", "text": "盐酸变稀后{反应停止}：HCl 不能完全反应", "c": "brown", "size": 32}], "callout": {"label": "易错", "at": "pr4", "text": "4 mol HCl（浓）+ 足量 MnO2 → Cl2 {< 1 mol}"}, "beat": {"k": "lab", "at": "pr2b", "text": "先看条件\n{浓盐酸、加热|red}"}}} />;
