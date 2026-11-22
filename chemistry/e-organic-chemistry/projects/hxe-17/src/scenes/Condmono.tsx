import React from 'react';
import {AutoScene} from '../components/auto';

export const Condmono: React.FC = () => <AutoScene k="condmono" d={{"tag": "考点三", "title": "缩聚物找单体", "blocks": [{"t": "big", "at": "cm1", "text": "在{酯基、酰胺基}处断开", "size": 46}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "C=O 一侧", "at": "cm2", "text": "补 {—OH}", "c": "red", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "O、N 一侧", "at": "cm2", "text": "补 {—H}", "c": "orange", "size": 34}]}]}, {"t": "text", "at": "cm3", "text": "涤纶 → 对苯二甲酸 + 乙二醇；尼龙-66 → {己二酸 + 己二胺}", "size": 31, "center": true}], "callout": {"label": "解题方法", "at": "cm4", "text": "{羰基补羟基，氧氮补氢}"}, "beat": {"k": "cap", "at": "cm3b", "text": "在酯基处{剪开|red}\n两边各补零件"}}} />;
