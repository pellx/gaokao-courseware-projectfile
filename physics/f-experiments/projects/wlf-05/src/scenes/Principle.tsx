import React from 'react';
import {AutoScene} from '../components/auto';

export const Principle: React.FC = () => <AutoScene k="principle" d={{"tag": "考点二", "title": "实验原理：等效替代", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "两个测力计", "at": "p1", "lines": ["互成角度拉橡皮条", {"at": "p3", "text": "结点到 {O}"}], "c": "orange", "size": 32}]}, {"blocks": [{"t": "big", "at": "p3", "text": "效果相同", "size": 40}]}, {"blocks": [{"t": "panel", "title": "一个测力计", "at": "p2", "lines": ["单独拉橡皮条", {"at": "p3", "text": "结点到 {同一 O}"}], "c": "orange", "size": 32}]}]}, {"t": "big", "at": "p4", "text": "一个测力计的拉力　=　两个力的{合力}", "size": 40}], "callout": {"label": "要点", "at": "p5", "text": "结点拉到{同一位置 O}：效果相同"}, "beat": {"k": "cheeks", "at": "p4b", "text": "两个力互成角度\n{效果 = 一个合力|red}"}}} />;
