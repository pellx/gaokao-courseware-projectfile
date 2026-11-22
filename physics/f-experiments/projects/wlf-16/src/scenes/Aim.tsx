import React from 'react';
import {AutoScene} from '../components/auto';

export const Aim: React.FC = () => <AutoScene k="aim" d={{"tag": "考点一", "title": "实验目的", "blocks": [{"t": "rule", "tag": "目的", "at": "m2", "text": "感应电流的{方向}与哪些因素有关", "c": "red"}, {"t": "rule", "tag": "目标", "at": "m3", "text": "找出判断感应电流方向的{一般规律|orange}", "c": "orange"}], "callout": {"label": "要点", "at": "m4", "text": "探究的是{方向}，不是大小"}}} />;
