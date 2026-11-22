import React from 'react';
import {AutoScene} from '../components/auto';

export const Carbon: React.FC = () => <AutoScene k="carbon" d={{"tag": "考点五", "title": "碳纳米材料", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "富勒烯", "at": "ca1", "text": "C60", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "碳纳米管", "at": "ca1", "text": "石墨片卷成管", "c": "orange", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "石墨烯", "at": "ca2", "text": "{单层石墨}", "c": "green", "size": 32}]}]}, {"t": "big", "at": "ca3", "text": "与金刚石、石墨互为{同素异形体}（都是单质）", "size": 40}], "callout": {"label": "易错", "at": "ca4", "text": "碳纳米材料属于{无机非金属材料}"}, "beat": {"k": "group", "at": "ca2b", "text": "都是碳家族\n{同种元素的不同单质|red}"}}} />;
