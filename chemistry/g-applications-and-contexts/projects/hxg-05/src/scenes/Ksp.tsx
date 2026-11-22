import React from 'react';
import {AutoScene} from '../components/auto';

export const Ksp: React.FC = () => <AutoScene k="ksp" d={{"tag": "考点三", "title": "用 K_sp 计算", "blocks": [{"t": "rule", "tag": "沉淀完全", "at": "ks1", "text": "令 c = {10^-5 mol/L}，代入 K_sp", "c": "red", "size": 31}, {"t": "panel", "title": "残留浓度", "at": "ks2", "lines": ["pH = 3 → c(OH^-) = 10^-11", "c(Fe^3+) = 4×10^-38 ÷ (10^-11)³ = {4×10^-5 mol/L}"], "c": "orange", "size": 31}], "callout": {"label": "易错", "at": "ks4", "text": "c(OH^-) 要{三次方}；pH → c(OH^-) 用 K_w"}, "beat": {"k": "bun", "at": "ks3b", "text": "K_sp 计算\n{就是代公式|red}"}}} />;
