import React from 'react';
import {AutoScene} from '../components/auto';

export const Drive: React.FC = () => <AutoScene k="drive" d={{"tag": "考点六", "title": "传动中的规律", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "同轴转动", "at": "f1", "lines": ["各点 {ω 相同}"], "c": "red", "size": 36}]}, {"blocks": [{"t": "panel", "title": "皮带、齿轮传动", "at": "f2", "lines": ["不打滑", "轮缘 {v 大小相等}"], "c": "orange", "size": 34}]}]}, {"t": "text", "at": "f3", "text": "再用 v = ωr 比较", "size": 32}], "callout": {"label": "易错", "at": "f4", "text": "只有{轮缘}上的点 v 相等"}, "beat": {"k": "cake", "at": "f2b", "text": "同一个蛋糕上的点\n{角速度相同|red}"}}} />;
