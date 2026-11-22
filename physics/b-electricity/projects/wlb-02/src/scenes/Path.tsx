import React from 'react';
import {AutoScene} from '../components/auto';

export const Path: React.FC = () => <AutoScene k="path" d={{"tag": "考点八", "title": "电场线与运动轨迹", "blocks": [{"t": "big", "at": "r1", "text": "电场线 {≠} 运动轨迹", "size": 52}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "电场线切线", "at": "r2", "text": "{受力}方向", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "轨迹切线", "at": "r2", "text": "{速度|orange}方向", "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "r3", "text": "重合条件：{直线}电场线 + 只受静电力 + v_0 为 0 或沿电场线"}, "beat": {"k": "a3", "at": "r2b", "text": "三个条件\n{同时满足|red}才重合"}}} />;
