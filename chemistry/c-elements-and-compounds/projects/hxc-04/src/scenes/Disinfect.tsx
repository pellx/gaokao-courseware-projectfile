import React from 'react';
import {AutoScene} from '../components/auto';

export const Disinfect: React.FC = () => <AutoScene k="84" d={{"tag": "考点五", "title": "84 消毒液", "blocks": [{"t": "rule", "tag": "有效成分", "at": "d1", "text": "{NaClO}：Cl2 + 2NaOH = NaCl + NaClO + H2O", "c": "red", "size": 31}, {"t": "big", "at": "d2", "text": "ClO^- + CO2 + H2O = HClO + {HCO3^-}", "size": 40}, {"t": "big", "at": "d3", "text": "ClO^- + Cl^- + 2H^+ = {Cl2↑} + H2O（不能与洁厕灵混用）", "size": 36, "c": "red", "soft": "redSoft"}], "callout": {"label": "易错", "at": "d4", "text": "与 CO2 反应生成 {HCO3^-}，不是 CO3^2-"}, "beat": {"k": "point", "at": "d3b", "text": "84 + 洁厕灵\n{千万别混用|red}"}}} />;
