import React from 'react';
import {AutoScene} from '../components/auto';

export const Period: React.FC = () => <AutoScene k="period" d={{"tag": "考点四", "title": "运动周期", "blocks": [{"t": "big", "at": "d1", "text": "T = 2πr/v = {2πm/qB}", "size": 56}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "有关", "at": "d3", "lines": ["比荷 q/m", "磁感应强度 B"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "无关", "at": "d3", "lines": ["速度大小 v", "轨道半径 r"], "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "d4", "text": "v 变大，r 变大，T {不变}"}, "beat": {"k": "sushi", "at": "d3b", "text": "转一圈的时间\n{固定不变|red}"}}} />;
