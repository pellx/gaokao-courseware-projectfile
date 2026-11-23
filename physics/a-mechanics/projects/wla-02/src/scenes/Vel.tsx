import React from 'react';
import {AutoScene} from '../components/auto';

export const Vel: React.FC = () => <AutoScene k="vel" d={{"tag": "考点一", "title": "速度", "blocks": [{"t": "big", "at": "v1", "text": "v = {Δx/Δt}", "size": 64}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "方法", "at": "v2", "text": "{比值定义法}", "c": "red", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "意义", "at": "v2", "text": "运动的{快慢}", "c": "orange", "size": 34}]}]}, {"t": "text", "at": "v3", "text": "单位 {m/s}；1 m/s = 3.6 km/h", "size": 34}], "callout": {"label": "要点", "at": "v4", "text": "速度是{矢量}，方向就是运动方向"}, "beat": {"k": "race", "at": "v3b", "text": "同样的时间\n走得多 → {速度大|red}"}}} />;
