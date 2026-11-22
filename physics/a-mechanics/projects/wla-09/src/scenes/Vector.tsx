import React from 'react';
import {AutoScene} from '../components/auto';

export const Vector: React.FC = () => <AutoScene k="vector" d={{"tag": "考点八", "title": "矢量和标量", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "矢量", "at": "h1", "lines": ["有大小、有方向", "平行四边形定则", "力、位移、速度"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "标量", "at": "h2", "lines": ["只有大小", "算术法则", "质量、路程、时间"], "c": "orange", "size": 32}]}]}, {"t": "rule", "tag": "三角形定则", "at": "h3", "text": "两矢量{首尾相接}，起点指向终点", "c": "red"}], "callout": {"label": "易错", "at": "h4", "text": "电流有方向，但相加用算术法则，是{标量}"}, "beat": {"k": "teach", "at": "h3b", "text": "三角形定则\n与平行四边形定则\n{实质相同|red}"}}} />;
