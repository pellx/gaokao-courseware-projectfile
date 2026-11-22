import React from 'react';
import {AutoScene} from '../components/auto';

export const Calc: React.FC = () => <AutoScene k="calc" d={{"tag": "考点五", "title": "pH 的计算", "blocks": [{"t": "items", "items": [{"at": "ca1", "text": "强酸：c(H^+) → pH。0.005 mol/L H2SO4 → pH = {2}"}, {"at": "ca2", "text": "强碱：c(OH^-) → c(H^+) → pH。0.01 mol/L NaOH → pH = {12}"}, {"at": "ca3", "text": "混合：先判断{谁过量}，过量部分 ÷ {总体积}"}], "size": 32}], "callout": {"label": "易错", "at": "ca4", "text": "碱与碱混合：先算 {c(OH^-)}，再换算 pH"}}} />;
