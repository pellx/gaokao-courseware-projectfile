import React from 'react';
import {AutoScene} from '../components/auto';

export const Field: React.FC = () => <AutoScene k="field" d={{"tag": "考点一", "title": "电场", "blocks": [{"t": "rule", "tag": "电场", "at": "f1", "text": "电荷周围存在的{特殊物质}", "c": "red", "size": 34}, {"t": "big", "at": "f2", "text": "电荷 A {⇄} 电场 {⇄} 电荷 B", "size": 44}], "callout": {"label": "要点", "at": "f3", "text": "场是{物质}存在的一种形式"}, "beat": {"k": "a1", "at": "f2b", "text": "不接触\n力也能通过{电场|red}传递"}}} />;
