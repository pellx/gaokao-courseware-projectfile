import React from 'react';
import {AutoScene} from '../components/auto';

export const First: React.FC = () => <AutoScene k="first" d={{"tag": "考点五", "title": "热力学第一定律", "blocks": [{"t": "big", "at": "f2", "text": "{ΔU = Q + W}", "size": 80}, {"t": "text", "at": "f2", "text": "内能增量 = 外界传给系统的热量 + 外界对系统做的功", "size": 32}, {"t": "rule", "tag": "地位", "at": "f3", "text": "能量守恒定律在{热现象}中的表现", "c": "orange", "size": 32}], "callout": {"label": "要点", "at": "f4", "text": "ΔU = W、ΔU = Q 都是{特例}"}}} />;
