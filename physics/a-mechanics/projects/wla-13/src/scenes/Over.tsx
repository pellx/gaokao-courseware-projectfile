import React from 'react';
import {AutoScene} from '../components/auto';

export const Over: React.FC = () => <AutoScene k="over" d={{"tag": "考点四", "title": "超重", "blocks": [{"t": "rule", "tag": "超重", "at": "d1", "text": "视重 {大于} 重力", "c": "red"}, {"t": "big", "at": "d2", "text": "F = m(g + a) {> mg}", "size": 46}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "d3", "text": "加速上升", "size": 40}]}, {"blocks": [{"t": "big", "at": "d3", "text": "减速下降", "size": 40, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "要点", "at": "d4", "text": "超重 ⇔ a {向上}"}, "beat": {"k": "sofa", "at": "d3b", "text": "压进坐垫再弹起\na {向上|red}：超重"}}} />;
