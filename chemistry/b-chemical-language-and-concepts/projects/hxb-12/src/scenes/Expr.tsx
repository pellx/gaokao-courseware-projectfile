import React from 'react';
import {AutoScene} from '../components/auto';

export const Expr: React.FC = () => <AutoScene k="expr" d={{"tag": "考点五", "title": "纯度、产率、质量分数的表达式", "blocks": [{"t": "big", "at": "ex1", "text": "w = {c · V × 10^-3} × 比例 × 倍数 × M ÷ m × 100%", "size": 36}, {"t": "panel", "title": "例：KMnO4 滴定 FeSO4", "at": "ex2", "lines": ["m g 样品 → 250 mL，取 25.00 mL，消耗 c mol/L KMnO4 V mL", {"at": "ex3", "text": "n(Fe^2+) = 5cV × 10^-3 × {10}"}, {"at": "ex3", "text": "w(FeSO4) = 5cV × 10^-2 × 152 ÷ m × 100%"}], "c": "red", "size": 31}], "callout": {"label": "答题模板", "at": "ex4", "text": "mL 乘 {10^-3}，比例、倍数都写进表达式"}}} />;
