import React from 'react';
import {AutoScene} from '../components/auto';

export const Yield: React.FC = () => <AutoScene k="yield" d={{"tag": "考点五", "title": "产率与纯度", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "产率", "at": "yi1", "text": "实际 ÷ {理论}", "c": "red", "size": 33}]}, {"blocks": [{"t": "rule", "tag": "纯度", "at": "yi2", "text": "纯物质 ÷ 样品", "c": "orange", "size": 33}]}]}, {"t": "panel", "title": "例：100 g 软锰矿（MnO2 87%）", "at": "yi3", "lines": ["n(Mn) = 87 ÷ 87 = 1 mol", "理论 MnSO4·H2O = 1 × 169 = {169 g}"], "c": "orange", "size": 31}], "callout": {"label": "易错", "at": "yi4", "text": "按{纯原料}算；结晶水要算进摩尔质量"}, "beat": {"k": "drink", "at": "yi3b", "text": "找{从头走到尾的元素|red}\n守恒最快"}}} />;
