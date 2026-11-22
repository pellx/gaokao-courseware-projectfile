import React from 'react';
import {AutoScene} from '../components/auto';

export const Dilate: React.FC = () => <AutoScene k="dilate" d={{"tag": "考点五", "title": "时间延缓效应", "blocks": [{"t": "rule", "tag": "结论", "at": "e1", "text": "运动物体上的过程，观察者测得时间{变长}", "c": "red"}, {"t": "big", "at": "e2", "text": "Δt = {Δτ / √(1 − v^2/c^2)}", "size": 48}, {"t": "text", "at": "e3", "text": "证据：高速 {μ 子}寿命变长，能到达地面", "size": 32}], "callout": {"label": "易错", "at": "e4", "text": "v 接近光速才明显；低速下差别{极小}"}, "beat": {"k": "tease", "at": "e3b", "text": "相对运动的双方\n都测得{对方的钟慢|red}"}}} />;
