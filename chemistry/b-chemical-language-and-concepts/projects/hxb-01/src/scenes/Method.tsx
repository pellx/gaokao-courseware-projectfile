import React from 'react';
import {AutoScene} from '../components/auto';

export const Method: React.FC = () => <AutoScene k="method" d={{"tag": "考点一", "title": "分类方法：树状与交叉", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "树状分类法", "at": "me1", "lines": ["物质 → {纯净物|red}、混合物", "纯净物 → {单质|orange}、{化合物|orange}", {"at": "me2", "text": "化合物 → {酸、碱、盐、氧化物|red}"}], "c": "red"}]}, {"blocks": [{"t": "panel", "title": "交叉分类法", "at": "me3", "lines": ["{Na2CO3|red}", "按阳离子：{钠盐|orange}", "按阴离子：{碳酸盐|orange}", "按组成：{正盐|orange}"], "c": "orange"}]}]}], "callout": {"label": "考法", "at": "me4", "text": "先问清{分类标准}：标准不同，同一物质可以归入不同类别"}, "beat": {"k": "cross", "at": "me3b", "text": "鼓手 + 甜点爱好者\n= 同一个人，多个类别\n{Na2CO3：钠盐、碳酸盐、正盐|red}"}}} />;
