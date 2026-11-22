import React from 'react';
import {AutoScene} from '../components/auto';

export const Ferric: React.FC = () => <AutoScene k="fe3" d={{"tag": "考点一", "title": "Fe^3+ 的氧化性", "blocks": [{"t": "items", "items": [{"at": "f31", "text": "2Fe^3+ + Fe = 3Fe^2+"}, {"at": "f31", "text": "2Fe^3+ + Cu = 2Fe^2+ + Cu^2+（{腐蚀印刷电路板}）"}, {"at": "f32", "text": "2Fe^3+ + 2I^- = 2Fe^2+ + I2"}, {"at": "f32", "text": "2Fe^3+ + SO2 + 2H2O = 2Fe^2+ + SO4^2- + 4H^+"}, {"at": "f33", "text": "2Fe^3+ + H2S = 2Fe^2+ + S↓ + 2H^+"}], "size": 32}, {"t": "big", "at": "f33", "text": "氧化性：Cl2 > {Fe^3+} > Cu^2+、I2", "size": 38}], "callout": {"label": "易错", "at": "f34", "text": "FeCl3 腐蚀铜板{不是置换反应}，生成 Fe^2+"}}} />;
