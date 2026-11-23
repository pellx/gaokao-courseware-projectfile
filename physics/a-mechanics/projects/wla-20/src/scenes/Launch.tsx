import React from 'react';
import {AutoScene} from '../components/auto';

export const Launch: React.FC = () => <AutoScene k="launch" d={{"tag": "考点四", "title": "发射速度与环绕速度", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "发射", "at": "d2", "text": "7.9 km/s 是{最小}发射速度", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "环绕", "at": "d3", "text": "7.9 km/s 是{最大}环绕速度", "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "d4", "text": "高轨卫星：发射速度{大}，运行速度{小}"}}} />;
