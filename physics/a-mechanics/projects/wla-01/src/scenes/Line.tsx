import React from 'react';
import {AutoScene} from '../components/auto';

export const Line: React.FC = () => <AutoScene k="line" d={{"tag": "考点八", "title": "直线运动的位置和位移", "blocks": [{"t": "big", "at": "l2", "text": "Δx = {x_2 − x_1}", "size": 56}, {"t": "items", "items": [{"at": "l3", "text": "Δx > 0：沿{正方向}；Δx < 0：沿{负方向}"}, {"at": "l4", "text": "{x-t 图像}：位置随时间的变化"}], "size": 34}], "callout": {"label": "易错", "at": "l5", "text": "x-t 图像{不是运动轨迹}"}}} />;
