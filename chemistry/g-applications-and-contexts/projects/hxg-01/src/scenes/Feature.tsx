import React from 'react';
import {AutoScene} from '../components/auto';

export const Feature: React.FC = () => <AutoScene k="feature" d={{"tag": "考点一", "title": "题型特点", "blocks": [{"t": "big", "at": "fe1", "text": "情境新，{考点旧}", "size": 50}, {"t": "items", "items": [{"at": "fe2", "text": "情境：航天、新能源、芯片、深海、冬奥"}, {"at": "fe2", "text": "考点：{物质类别、变化类型、元素组成}"}], "size": 34}], "callout": {"label": "解题方法", "at": "fe4", "text": "划出关键词，{翻译成具体判断}"}, "beat": {"k": "orange", "at": "fe2b", "text": "剥开情境\n{都是学过的|red}"}}} />;
