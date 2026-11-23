import React from 'react';
import {AutoScene} from '../components/auto';

export const Aim: React.FC = () => <AutoScene k="aim" d={{"tag": "考点一", "title": "实验目的", "blocks": [{"t": "rule", "tag": "目的", "at": "a1", "text": "用打点计时器测{平均速度}和{瞬时速度}", "c": "red"}, {"t": "rule", "tag": "规律", "at": "a2", "text": "作 {v-t 图像}，探究速度随时间变化的规律", "c": "orange"}], "callout": {"label": "要点", "at": "a4", "text": "先{测速度}，再用图像{找规律}"}}} />;
