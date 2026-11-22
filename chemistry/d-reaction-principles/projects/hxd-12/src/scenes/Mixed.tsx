import React from 'react';
import {AutoScene} from '../components/auto';

export const Mixed: React.FC = () => <AutoScene k="mixed" d={{"tag": "考点六", "title": "混合溶液的排序", "blocks": [{"t": "panel", "title": "等浓度 CH3COOH + CH3COONa（{酸性}）", "at": "mx1", "lines": [{"at": "mx2", "text": "c(CH3COO^-) > c(Na^+) > c(CH3COOH) > c(H^+) > c(OH^-)"}], "c": "red", "size": 30}, {"t": "panel", "title": "等浓度 NH3·H2O + NH4Cl（{碱性|orange}）", "at": "mx3", "lines": ["c(NH4^+) > c(Cl^-) > c(NH3·H2O) > c(OH^-) > c(H^+)"], "c": "orange", "size": 30}], "callout": {"label": "易错", "at": "mx4", "text": "HCN 与 NaCN 等浓度混合显{碱性}：看 pH 或 K 判断"}}} />;
