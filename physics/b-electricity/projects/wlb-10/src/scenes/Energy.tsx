import React from 'react';
import {AutoScene} from '../components/auto';

export const Energy: React.FC = () => <AutoScene k="energy" d={{"tag": "考点七", "title": "闭合电路中的能量与功率", "blocks": [{"t": "big", "at": "g1", "text": "EIt = {UIt} + {I^2rt|orange}", "size": 52}, {"t": "chain", "steps": [{"at": "g2", "text": "P_总 = EI", "c": "red"}, {"at": "g2", "text": "P_出 = UI", "c": "orange"}, {"at": "g2", "text": "P_内 = I^2r", "c": "orange"}], "arrows": []}, {"t": "big", "at": "g3", "text": "η = {U/E}", "size": 50}], "callout": {"label": "要点", "at": "g4", "text": "P_总 = P_出 + {P_内}"}, "beat": {"k": "gift", "at": "g2b", "text": "能量大部分\n{送给外电路|red}"}}} />;
