import React from 'react';
import {AutoScene} from '../components/auto';

export const Sub: React.FC = () => <AutoScene k="sub" d={{"tag": "考点五", "title": "合运动与分运动", "blocks": [{"t": "rule", "tag": "合运动", "at": "e1", "text": "物体{实际发生}的运动", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "e2", "text": "等时性", "size": 40}]}, {"blocks": [{"t": "big", "at": "e3", "text": "独立性", "size": 40, "c": "orange", "soft": "orangeSoft"}]}, {"blocks": [{"t": "big", "at": "e3", "text": "等效性", "size": 40}]}]}], "callout": {"label": "要点", "at": "e4", "text": "{等时、独立、等效}"}, "beat": {"k": "rain", "at": "e3b", "text": "分运动各自独立\n合起来就是{实际运动|red}"}}} />;
