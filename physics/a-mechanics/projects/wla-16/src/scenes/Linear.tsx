import React from 'react';
import {AutoScene} from '../components/auto';

export const Linear: React.FC = () => <AutoScene k="linear" d={{"tag": "考点二", "title": "线速度", "blocks": [{"t": "big", "at": "b1", "text": "v = {Δs/Δt}", "size": 56}, {"t": "rule", "tag": "方向", "at": "b2", "text": "沿圆周该点的{切线方向}", "c": "orange"}, {"t": "text", "at": "b3", "text": "单位 m/s，描述沿圆周运动的快慢", "size": 32}], "callout": {"label": "要点", "at": "b4", "text": "Δs 是{弧长}"}}} />;
