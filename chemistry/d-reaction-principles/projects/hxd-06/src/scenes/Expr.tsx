import React from 'react';
import {AutoScene} from '../components/auto';

export const Expr: React.FC = () => <AutoScene k="expr" d={{"tag": "考点一", "title": "K 的表达式", "blocks": [{"t": "big", "at": "ex1", "text": "N2(g) + 3H2(g) ⇌ 2NH3(g)\nK = {c²(NH3) / [c(N2)·c³(H2)]}", "size": 40}, {"t": "rule", "tag": "不写入", "at": "ex2", "text": "{固体、纯液体}、稀溶液中的水", "c": "orange", "size": 32}, {"t": "text", "at": "ex2", "text": "C(s) + H2O(g) ⇌ CO(g) + H2(g)　K = c(CO)·c(H2) / c(H2O)", "size": 30}], "callout": {"label": "易错", "at": "ex4", "text": "K 大：反应{完全程度大}，与速率无关"}}} />;
