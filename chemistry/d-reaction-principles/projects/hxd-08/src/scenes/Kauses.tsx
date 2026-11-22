import React from 'react';
import {AutoScene} from '../components/auto';

export const Kauses: React.FC = () => <AutoScene k="react" d={{"tag": "考点六", "title": "用 K_a 判断反应", "blocks": [{"t": "chain", "steps": [{"at": "re1", "text": "H2CO3"}, {"at": "re1", "text": "HClO"}, {"at": "re1", "text": "HCO3^-"}], "arrows": [">", ">"], "center": true, "size": 40}, {"t": "big", "at": "re3", "text": "ClO^- + CO2 + H2O = HClO + {HCO3^-}", "size": 40}, {"t": "text", "at": "re2", "text": "无论 CO2 少量还是过量，NaClO 溶液中都生成 {HCO3^-}", "size": 31, "center": true}], "callout": {"label": "解题方法", "at": "re4", "text": "按酸性排队，{前面的酸制后面的酸}"}}} />;
