import React from 'react';
import {AutoScene} from '../components/auto';

export const Grav: React.FC = () => <AutoScene k="grav" d={{"tag": "考点二", "title": "重力", "blocks": [{"t": "rule", "tag": "来源", "at": "g1", "text": "{地球的吸引}", "c": "red", "size": 36}, {"t": "big", "at": "g2", "text": "G = {mg}", "size": 64}, {"t": "rule", "tag": "方向", "at": "g3", "text": "{竖直向下}", "c": "orange", "size": 36}], "callout": {"label": "易错", "at": "g4", "text": "地点不同，重力可能不同；{质量不变}"}, "beat": {"k": "weigh", "at": "g3b", "text": "G = {mg|red}\n质量越大，重力越大"}}} />;
