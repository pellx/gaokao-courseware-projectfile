import React from 'react';
import {AutoScene} from '../components/auto';

export const Calc: React.FC = () => <AutoScene k="calc" d={{"tag": "考点七", "title": "电解计算", "blocks": [{"t": "big", "at": "cc1", "text": "串联电路：各电极{转移电子数相等}", "size": 40}, {"t": "text", "at": "cc2", "text": "4e^- ～ O2 ～ 2Cu ～ 2Cl2 ～ 2H2 ～ 4Ag ～ 4H^+ ～ 4OH^-", "size": 33, "center": true}, {"t": "panel", "title": "例", "at": "cc3", "lines": ["阴极析出 Cu 6.4 g = 0.1 mol", "转移电子 {0.2 mol} → 阳极 O2 {0.05 mol}"], "c": "orange", "size": 32}], "callout": {"label": "解题方法", "at": "cc4", "text": "找到电子数，用{电子守恒}串联"}}} />;
