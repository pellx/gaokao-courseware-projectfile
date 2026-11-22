import React from 'react';
import {AutoScene} from '../components/auto';

export const Calc: React.FC = () => <AutoScene k="calc" d={{"tag": "考点三", "title": "硝酸参与的计算", "blocks": [{"t": "big", "at": "ca2", "text": "n(HNO3) 消耗 = {n(NO3^-) 盐中} + {n(N) 气体中|orange}", "size": 38}, {"t": "panel", "title": "例：1.92 g Cu 与足量稀硝酸", "at": "ca3", "lines": ["n(Cu) = 0.03 mol，失电子 0.06 mol", "n(NO) = 0.06 ÷ 3 = 0.02 mol（电子守恒）", "n(HNO3) = 0.03 × 2 + 0.02 = {0.08 mol}（N 守恒）"], "c": "red", "size": 32}], "callout": {"label": "解题方法", "at": "ca4", "text": "{电子守恒}算气体，{N 原子守恒|orange}算消耗的硝酸"}}} />;
