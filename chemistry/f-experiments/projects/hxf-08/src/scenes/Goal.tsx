import React from 'react';
import {AutoScene} from '../components/auto';

export const Goal: React.FC = () => <AutoScene k="goal" d={{"tag": "考点二", "title": "读懂探究目的与猜想", "blocks": [{"t": "rule", "tag": "目的", "at": "go1", "text": "“某小组探究……”：结论要{回扣目的}", "c": "red", "size": 32}, {"t": "rule", "tag": "猜想", "at": "go2", "text": "实验是{用来区分}几个猜想的", "c": "orange", "size": 32}, {"t": "text", "at": "go3", "text": "若猜想成立 → 应看到什么现象？与实际对照", "size": 32, "center": true}], "callout": {"label": "易错", "at": "go4", "text": "结论要写出{具体原因}"}, "beat": {"k": "kimono", "at": "go3b", "text": "先弄清{要找什么|red}\n再去找"}}} />;
