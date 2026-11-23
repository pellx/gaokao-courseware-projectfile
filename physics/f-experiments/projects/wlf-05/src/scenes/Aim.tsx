import React from 'react';
import {AutoScene} from '../components/auto';

export const Aim: React.FC = () => <AutoScene k="aim" d={{"tag": "考点一", "title": "实验目的", "blocks": [{"t": "rule", "tag": "目的", "at": "a1", "text": "两个{互成角度}的力与合力满足什么关系", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": false, "at": "a2", "text": "F = F_1 + F_2（大小直接相加）", "size": 32}]}, {"blocks": [{"t": "mark", "ok": true, "at": "a3", "text": "作图找出{合成规律}", "size": 32}]}]}], "callout": {"label": "要点", "at": "a4", "text": "{大小和方向}都要比较"}}} />;
