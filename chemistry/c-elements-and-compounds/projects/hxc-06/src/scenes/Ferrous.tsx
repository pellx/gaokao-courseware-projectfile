import React from 'react';
import {AutoScene} from '../components/auto';

export const Ferrous: React.FC = () => <AutoScene k="fe2" d={{"tag": "考点二", "title": "Fe^2+ 的还原性", "blocks": [{"t": "items", "items": [{"at": "f21", "text": "2Fe^2+ + Cl2 = 2Fe^3+ + 2Cl^-"}, {"at": "f22", "text": "2Fe^2+ + H2O2 + 2H^+ = 2Fe^3+ + 2H2O（{绿色氧化剂|green}）"}, {"at": "f23", "text": "MnO4^- + 5Fe^2+ + 8H^+ = Mn^2+ + 5Fe^3+ + 4H2O（滴定）"}], "size": 32}, {"t": "chain", "steps": [{"at": "f23", "text": "{Fe^2+|green}"}, {"at": "f23", "text": "{Fe^3+}"}], "arrows": ["Cl2、H2O2、KMnO4"], "center": true, "size": 40}], "callout": {"label": "易错", "at": "f24", "text": "保存 FeSO4 溶液：加{铁粉}防氧化"}, "beat": {"k": "swap", "at": "f23b", "text": "Fe^2+ ⇌ Fe^3+\n{看遇到氧化剂还是还原剂|red}"}}} />;
