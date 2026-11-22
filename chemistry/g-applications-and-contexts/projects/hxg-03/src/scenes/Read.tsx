import React from 'react';
import {AutoScene} from '../components/auto';

export const Read: React.FC = () => <AutoScene k="read" d={{"tag": "考点二", "title": "读流程的方法", "blocks": [{"t": "items", "items": [{"at": "re1", "text": "① 看{目的产物}和{杂质}"}, {"at": "re2", "text": "② {追踪每种元素}的去向"}, {"at": "re3", "text": "③ 回头的箭头：{循环利用}"}], "size": 36}], "callout": {"label": "答题模板", "at": "re4", "text": "写出{每种元素的去向}"}, "beat": {"k": "many", "at": "re3b", "text": "元素就像小人\n{一个一个追踪|red}"}}} />;
