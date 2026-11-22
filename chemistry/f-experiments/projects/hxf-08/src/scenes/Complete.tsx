import React from 'react';
import {AutoScene} from '../components/auto';

export const Complete: React.FC = () => <AutoScene k="complete" d={{"tag": "考点六", "title": "补全实验方案", "blocks": [{"t": "chain", "steps": [{"at": "cm1", "text": "{试剂}\n浓度、用量"}, {"at": "cm1", "text": "{操作}"}, {"at": "cm1", "text": "{现象}"}, {"at": "cm1", "text": "{结论}"}], "arrows": [], "center": true, "size": 34}, {"t": "text", "at": "cm2", "text": "“取 {2 mL 0.1 mol/L} 某溶液……”：与对照组一致", "size": 33, "center": true}], "callout": {"label": "答题模板", "at": "cm4", "text": "“取 {x mL c mol/L}……，{若……，则……}”"}}} />;
