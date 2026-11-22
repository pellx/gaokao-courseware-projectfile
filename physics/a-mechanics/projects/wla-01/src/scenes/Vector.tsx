import React from 'react';
import {AutoScene} from '../components/auto';

export const Vector: React.FC = () => <AutoScene k="vector" d={{"tag": "考点七", "title": "矢量与标量", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "矢量", "at": "v1", "lines": ["有大小、有{方向}", "位移、速度、力"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "标量", "at": "v2", "lines": ["只有大小", "路程、时间、质量、温度"], "c": "orange", "size": 34}]}]}, {"t": "text", "at": "v3", "text": "矢量相加不能直接把数值相加", "size": 32}, {"t": "big", "at": "v4", "text": "直线运动：{+、−} 表示方向", "size": 40}], "callout": {"label": "易错", "at": "v5", "text": "−5 m 的位移{大于} +3 m"}}} />;
