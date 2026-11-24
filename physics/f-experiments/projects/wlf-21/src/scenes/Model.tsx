import React from 'react';
import {AutoScene} from '../components/auto';

export const Model: React.FC = () => <AutoScene k="model" d={{"tag": "考点二", "title": "实验原理", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "模型", "at": "p1", "text": "分子看成{球形}，{紧密排列}", "c": "red", "size": 32}, {"t": "rule", "tag": "油膜", "at": "p2", "text": "{单分子层}：厚度 = 直径", "c": "orange", "size": 32}]}, {"blocks": [{"t": "big", "at": "p3", "text": "d = {V/S}", "size": 80}]}]}], "callout": {"label": "要点", "at": "p4", "text": "{球形} · {紧密排列} · {单分子层}"}, "beat": {"k": "hug", "at": "p1b", "text": "圆滚滚、抱紧紧\n{球形|red}、{紧密排列|red}"}}} />;
