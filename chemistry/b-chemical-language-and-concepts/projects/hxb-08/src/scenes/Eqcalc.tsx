import React from 'react';
import {AutoScene} from '../components/auto';

export const Eqcalc: React.FC = () => <AutoScene k="eqcalc" d={{"tag": "考点六", "title": "物质的量用于方程式计算", "blocks": [{"t": "big", "at": "ec1", "text": "系数之比 = {物质的量之比}", "size": 46}, {"t": "panel", "title": "例：5.6 g Fe 与足量盐酸", "at": "ec2", "lines": ["n(Fe) = 5.6 g ÷ 56 g/mol = 0.1 mol", "Fe + 2HCl = FeCl2 + H2↑", "n(H2) = {0.1 mol}　V(H2) = 0.1 × 22.4 = {2.24 L}（标况）"], "c": "red", "size": 32}, {"t": "text", "at": "ec3", "text": "上下单位一致，左右相当", "size": 32, "center": true, "c": "orange"}], "callout": {"label": "易错", "at": "ec4", "text": "有“足量、过量”时，用{不足量}的物质计算"}}} />;
