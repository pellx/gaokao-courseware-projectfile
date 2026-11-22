import React from 'react';
import {AutoScene} from '../components/auto';

export const Structure: React.FC = () => <AutoScene k="structure" d={{"tag": "考点一", "title": "流程题的结构", "blocks": [{"t": "chain", "steps": [{"at": "st1", "text": "原料"}, {"at": "st1", "text": "预处理"}, {"at": "st1", "text": "{核心反应}"}, {"at": "st1", "text": "分离提纯"}, {"at": "st1", "text": "{产品}"}], "arrows": [], "center": true, "size": 36}, {"t": "text", "at": "st3", "text": "设问：预处理 · 条件控制 · {陌生方程式} · 滤渣 · 分离 · {K_sp} · 产率", "size": 31, "center": true}], "callout": {"label": "解题方法", "at": "st4", "text": "{先看问题}，再回流程图"}}} />;
