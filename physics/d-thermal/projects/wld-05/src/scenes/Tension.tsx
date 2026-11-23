import React from 'react';
import {AutoScene} from '../components/auto';

export const Tension: React.FC = () => <AutoScene k="tension" d={{"tag": "考点六", "title": "液体的表面张力", "blocks": [{"t": "rule", "tag": "原因", "at": "e1", "text": "表面层分子{稀疏}，分子力表现为引力", "c": "red"}, {"t": "rule", "tag": "效果", "at": "e2", "text": "液面有{收缩趋势}，方向与液面相切", "c": "orange"}, {"t": "text", "at": "e3", "text": "露珠呈球形、水黾停在水面", "size": 34}], "callout": {"label": "易错", "at": "e4", "text": "方向与液面{相切}"}, "beat": {"k": "umbrella", "at": "e3b", "text": "表面张力\n水滴{收缩成球|red}"}}} />;
