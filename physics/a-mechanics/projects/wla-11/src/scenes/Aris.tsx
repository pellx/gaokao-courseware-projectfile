import React from 'react';
import {AutoScene} from '../components/auto';

export const Aris: React.FC = () => <AutoScene k="aris" d={{"tag": "考点一", "title": "亚里士多德的观点", "blocks": [{"t": "rule", "tag": "观点", "at": "a1", "text": "有力作用，物体才{运动}", "c": "red"}, {"t": "rule", "tag": "推论", "at": "a2", "text": "没有力，物体就{静止}", "c": "orange"}, {"t": "text", "at": "a3", "text": "符合日常经验，但忽略了{摩擦力}", "size": 32}], "callout": {"label": "易错", "at": "a4", "text": "“力维持运动”是{错误观点}"}}} />;
