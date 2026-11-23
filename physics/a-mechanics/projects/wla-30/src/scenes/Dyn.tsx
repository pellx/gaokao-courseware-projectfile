import React from 'react';
import {AutoScene} from '../components/auto';

export const Dyn: React.FC = () => <AutoScene k="dyn" d={{"tag": "考点二", "title": "简谐运动的动力学特征", "blocks": [{"t": "big", "at": "d1", "text": "{F = −kx}", "size": 64}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "大小", "at": "d2", "text": "与位移{成正比}", "c": "red", "size": 30}]}, {"blocks": [{"t": "rule", "tag": "方向", "at": "d3", "text": "与位移{相反}", "c": "orange", "size": 30}]}]}, {"t": "text", "at": "d4", "text": "满足 F = −kx → 简谐运动", "size": 32}], "callout": {"label": "易错", "at": "d5", "text": "k {不一定}是劲度系数"}}} />;
