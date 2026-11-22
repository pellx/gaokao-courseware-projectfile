import React from 'react';
import {AutoScene} from '../components/auto';

export const Write: React.FC = () => <AutoScene k="write" d={{"tag": "考点四", "title": "大题规范书写", "blocks": [{"t": "items", "items": [{"at": "wr1", "text": "每种物质标{状态}"}, {"at": "wr1", "text": "ΔH 带{正负号}和单位 kJ/mol"}, {"at": "wr2", "text": "用字母表示：ΔH = {(a − 2b) kJ/mol}，括号不能丢"}, {"at": "wr3", "text": "给“每克放热”：先换算成{每摩尔反应}"}], "size": 33}], "callout": {"label": "答题模板", "at": "wr4", "text": "写出关系式，代入数值{带符号}计算"}, "beat": {"k": "notes", "at": "wr3b", "text": "状态、{正负号}、{单位}\n一个都不能少"}}} />;
