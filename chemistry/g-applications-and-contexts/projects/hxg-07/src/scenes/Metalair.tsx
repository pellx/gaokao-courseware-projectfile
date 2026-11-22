import React from 'react';
import {AutoScene} from '../components/auto';

export const Metalair: React.FC = () => <AutoScene k="metalair" d={{"tag": "考点四", "title": "金属-空气电池与钠离子电池", "blocks": [{"t": "rule", "tag": "金属-空气", "at": "ma1", "text": "活泼金属作{负极}，O2 在正极得电子", "c": "red", "size": 32}, {"t": "text", "at": "ma2", "text": "正极（碱性）：O2 + 2H2O + 4e^- = {4OH^-}", "size": 34, "center": true}, {"t": "rule", "tag": "钠离子", "at": "ma3", "text": "Na^+ {嵌入、脱嵌}，资源丰富", "c": "orange", "size": 32}], "callout": {"label": "易错", "at": "ma4", "text": "锂-空气电池{不能用水溶液}"}}} />;
