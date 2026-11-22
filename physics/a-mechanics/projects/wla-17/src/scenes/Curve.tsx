import React from 'react';
import {AutoScene} from '../components/auto';

export const Curve: React.FC = () => <AutoScene k="curve" d={{"tag": "考点四", "title": "一般的曲线运动", "blocks": [{"t": "chain", "steps": [{"at": "c1", "text": "一般曲线"}, {"at": "c2", "text": "分成许多小段"}, {"at": "c2", "text": "每段看作{圆弧}"}, {"at": "c3", "text": "用圆周运动分析"}], "arrows": []}], "callout": {"label": "要点", "at": "c4", "text": "弯曲越厉害，圆弧{半径越小}"}}} />;
