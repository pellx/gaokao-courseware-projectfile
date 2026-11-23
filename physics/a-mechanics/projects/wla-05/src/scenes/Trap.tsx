import React from 'react';
import {AutoScene} from '../components/auto';

export const Trap: React.FC = () => <AutoScene k="trap" d={{"tag": "考点八", "title": "图线不是轨迹", "blocks": [{"t": "big", "at": "d1", "text": "只能描述{直线运动}", "size": 48}, {"t": "items", "items": [{"at": "d2", "text": "纵坐标只有{正、负}两个方向"}, {"at": "d3", "text": "图线{不是轨迹}：表示物理量随时间的变化"}, {"at": "d4", "text": "图线弯曲：变化{不均匀}，不是走曲线"}], "size": 34}], "callout": {"label": "易错", "at": "d5", "text": "弯曲的图线 {≠} 曲线运动"}}} />;
