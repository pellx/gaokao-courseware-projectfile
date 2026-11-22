import React from 'react';
import {AutoScene} from '../components/auto';

export const Build: React.FC = () => <AutoScene k="build" d={{"tag": "考点一", "title": "沉淀溶解平衡的建立", "blocks": [{"t": "big", "at": "bu1", "text": "AgCl(s) ⇌ Ag^+(aq) + Cl^-(aq)", "size": 44}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "特点", "at": "bu2", "text": "{动态平衡}，可以移动", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "沉淀完全", "at": "bu3", "text": "c < {1×10^-5 mol/L}", "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "bu4", "text": "标状态 {s、aq}，用可逆号"}, "beat": {"k": "puddle", "at": "bu2b", "text": "一边溶解、一边析出\n{速率相等|red}"}}} />;
