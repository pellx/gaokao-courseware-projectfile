import React from 'react';
import {AutoScene} from '../components/auto';

export const Method: React.FC = () => <AutoScene k="method" d={{"tag": "考点七", "title": "解题方法", "blocks": [{"t": "chain", "steps": [{"at": "me1", "text": "{定溶质及比例}"}, {"at": "me2", "text": "比电离与水解"}, {"at": "me3", "text": "写守恒、排大小"}], "arrows": [], "center": true, "size": 36}, {"t": "items", "items": [{"at": "me1", "text": "混合溶液：先写反应，算出剩余物质"}, {"at": "me2", "text": "看 pH，或比较 K_a 与 K_h"}, {"at": "me3", "text": "等式 → {守恒}；不等式 → {排序}"}], "size": 32}], "callout": {"label": "解题方法", "at": "me4", "text": "系数对不上：可能是{两种守恒相加减}"}, "beat": {"k": "smug", "at": "me3b", "text": "定溶质 → 比大小 → 写守恒\n{三步走完|red}"}}} />;
