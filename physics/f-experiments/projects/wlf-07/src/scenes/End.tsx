import React from 'react';
import {AutoScene} from '../components/auto';

export const End: React.FC = () => <AutoScene k="end" d={{"tag": "考点八", "title": "实验结论", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "水平方向", "at": "n2", "text": "{匀速直线运动}，速度为 v_0", "c": "orange", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "竖直方向", "at": "n3", "text": "{自由落体运动}，加速度为 g", "c": "red", "size": 34}]}]}, {"t": "big", "at": "n4", "text": "平抛 = {水平匀速} + {竖直自由落体}", "size": 44}], "callout": {"label": "要点", "at": "n4", "text": "水平{匀速直线}，竖直{自由落体}"}, "beat": {"k": "leap", "at": "n3b", "text": "向前冲，同时往下落\n{两个分运动互不影响|red}"}}} />;
