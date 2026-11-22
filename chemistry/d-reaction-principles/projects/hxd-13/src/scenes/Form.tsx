import React from 'react';
import {AutoScene} from '../components/auto';

export const Form: React.FC = () => <AutoScene k="form" d={{"tag": "考点五", "title": "沉淀的生成：调 pH 除杂", "blocks": [{"t": "rule", "tag": "例", "at": "fo1", "text": "CuSO4 中混有 Fe^3+：加 {CuO} 调 pH，Fe^3+ → Fe(OH)3↓", "c": "red", "size": 31}, {"t": "panel", "title": "Fe^3+ 沉淀完全的 pH", "at": "fo2", "lines": ["c(Fe^3+) = 10^-5，K_sp = 4×10^-38", "c³(OH^-) = 4×10^-33 → c(OH^-) ≈ 1.6×10^-11", "pH ≈ {3.2}"], "c": "orange", "size": 31}, {"t": "text", "at": "fo3", "text": "开始沉淀：代{原始浓度|orange}；沉淀完全：代 {10^-5}", "size": 31}], "callout": {"label": "解题方法", "at": "fo4", "text": "调 pH 用 {CuO、Cu(OH)2}：消耗 H^+、不引入杂质"}, "beat": {"k": "blob", "at": "fo3b", "text": "沉淀完全\n≠ 一点不剩，{c < 10^-5|red}"}}} />;
