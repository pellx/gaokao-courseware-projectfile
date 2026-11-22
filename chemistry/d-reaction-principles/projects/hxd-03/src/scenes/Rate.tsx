import React from 'react';
import {AutoScene} from '../components/auto';

export const Rate: React.FC = () => <AutoScene k="rate" d={{"tag": "考点一", "title": "速率的表示与计算", "blocks": [{"t": "big", "at": "ra1", "text": "v = {Δc / Δt}　单位 mol/(L·min)", "size": 44}, {"t": "rule", "tag": "比例", "at": "ra2", "text": "速率之比 = {化学计量数之比}：v(N2) : v(H2) : v(NH3) = 1 : 3 : 2", "c": "orange", "size": 31}, {"t": "panel", "title": "例", "at": "ra3", "lines": ["2 L 容器，2 min 内 n(NH3) 增加 0.8 mol", "v(NH3) = 0.8 ÷ 2 ÷ 2 = {0.2 mol/(L·min)}"], "c": "orange", "size": 31}], "callout": {"label": "易错", "at": "ra4", "text": "先除以{体积}得浓度；{固体、纯液体}不用来表示速率"}}} />;
