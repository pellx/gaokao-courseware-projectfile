import React from 'react';
import {AutoScene} from '../components/auto';

export const Therm: React.FC = () => <AutoScene k="therm" d={{"tag": "考点六", "title": "分子的热运动", "blocks": [{"t": "rule", "tag": "热运动", "at": "t1", "text": "分子{永不停息}的无规则运动", "c": "red"}, {"t": "big", "at": "t2", "text": "温度越高，热运动{越剧烈}", "size": 50}, {"t": "text", "at": "t3", "text": "证据：{扩散现象|orange}、{布朗运动|orange}", "size": 34}], "callout": {"label": "要点", "at": "t4", "text": "分子热运动{永不停止}"}}} />;
