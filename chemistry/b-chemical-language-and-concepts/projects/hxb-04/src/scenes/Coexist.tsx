import React from 'react';
import {AutoScene} from '../components/auto';

export const Coexist: React.FC = () => <AutoScene k="coexist" d={{"tag": "考点七", "title": "离子共存：四类不能共存", "blocks": [{"t": "rule", "tag": "复分解", "at": "cx2", "text": "Ba^2+ 与 SO4^2-；H^+ 与 CO3^2-、OH^-；NH4^+ 与 OH^-", "c": "red"}, {"t": "rule", "tag": "氧化还原", "at": "cx3", "text": "Fe^3+ 与 I^-、S^2-；{H^+ + NO3^-} 与 Fe^2+；ClO^- 与 I^-", "c": "orange"}, {"t": "rule", "tag": "双水解〔课外〕", "at": "cx4", "text": "Al^3+ 与 HCO3^-、CO3^2-", "c": "brown"}, {"t": "rule", "tag": "配位", "at": "cx4", "text": "Fe^3+ 与 SCN^-（生成{配合物}）", "c": "green"}], "callout": {"label": "易错", "at": "cx5", "text": "Fe^3+ 与 SCN^- 是{配合物}不是沉淀；HCO3^- 遇 H^+、OH^- 都反应"}, "beat": {"k": "fight", "at": "cx4b", "text": "一见面就吵\n= 能反应\n{不能大量共存|red}"}}} />;
