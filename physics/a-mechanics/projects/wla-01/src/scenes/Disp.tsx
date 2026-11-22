import React from 'react';
import {AutoScene} from '../components/auto';

export const Disp: React.FC = () => <AutoScene k="disp" d={{"tag": "考点六", "title": "位移与路程", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "位移", "at": "d1", "lines": ["初位置 → 末位置的{有向线段}", "{矢量}", "只与起点、终点有关"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "路程", "at": "d2", "lines": ["运动{轨迹的长度}", "{标量}", {"at": "d3", "text": "与路径有关"}], "c": "orange", "size": 32}]}]}, {"t": "text", "at": "d3", "text": "绕操场一圈回到起点：位移 {0}，路程 = 一圈长", "size": 32}], "callout": {"label": "易错", "at": "d4", "text": "只有{单向直线运动}，位移大小 = 路程"}}} />;
