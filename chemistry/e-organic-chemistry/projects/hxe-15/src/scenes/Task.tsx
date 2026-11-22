import React from 'react';
import {AutoScene} from '../components/auto';

export const Task: React.FC = () => <AutoScene k="task" d={{"tag": "考点一", "title": "有机合成的任务", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "任务一", "at": "ta1", "text": "{构建碳骨架}", "c": "red", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "任务二", "at": "ta1", "text": "{引入、转化官能团}", "c": "orange", "size": 34}]}]}, {"t": "text", "at": "ta2", "text": "原则：步骤少、产率高、原料易得、{绿色}", "size": 33, "center": true}], "callout": {"label": "解题方法", "at": "ta4", "text": "先比{碳原子数}"}}} />;
