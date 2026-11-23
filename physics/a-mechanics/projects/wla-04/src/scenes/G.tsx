import React from 'react';
import {AutoScene} from '../components/auto';

export const G: React.FC = () => <AutoScene k="g" d={{"tag": "考点四", "title": "自由落体加速度 g", "blocks": [{"t": "big", "at": "g4", "text": "g ≈ {9.8 m/s^2}", "size": 60}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "方向", "at": "g1", "text": "{竖直向下}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "同一地点", "at": "g2", "text": "一切物体 g {相同}", "c": "orange", "size": 32}]}]}, {"t": "text", "at": "g3", "text": "纬度越高，g 越{大}：赤道最小，两极最大", "size": 34}], "callout": {"label": "易错", "at": "g5", "text": "g 随纬度升高而{增大}"}}} />;
