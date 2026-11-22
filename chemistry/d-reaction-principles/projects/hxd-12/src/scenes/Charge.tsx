import React from 'react';
import {AutoScene} from '../components/auto';

export const Charge: React.FC = () => <AutoScene k="charge" d={{"tag": "考点二", "title": "电荷守恒", "blocks": [{"t": "big", "at": "ch1", "text": "正电荷总数 = {负电荷总数}", "size": 46}, {"t": "text", "at": "ch2", "text": "Na2CO3：c(Na^+) + c(H^+) = {2c(CO3^2-)} + c(HCO3^-) + c(OH^-)", "size": 34, "center": true}], "callout": {"label": "易错", "at": "ch4", "text": "只写{离子}；带几个电荷乘几；别漏 H^+、OH^-"}}} />;
