import React from 'react';
import {AutoScene} from '../components/auto';

export const Under: React.FC = () => <AutoScene k="under" d={{"tag": "考点五", "title": "失重", "blocks": [{"t": "rule", "tag": "失重", "at": "e1", "text": "视重 {小于} 重力", "c": "red"}, {"t": "big", "at": "e2", "text": "F = m(g − a) {< mg}", "size": 46}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "e3", "text": "加速下降", "size": 40}]}, {"blocks": [{"t": "big", "at": "e3", "text": "减速上升", "size": 40, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "要点", "at": "e4", "text": "失重 ⇔ a {向下}"}}} />;
