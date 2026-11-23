import React from 'react';
import {AutoScene} from '../components/auto';

export const Halley: React.FC = () => <AutoScene k="halley" d={{"tag": "考点八", "title": "预言彗星回归", "blocks": [{"t": "rule", "tag": "哈雷", "at": "h1", "text": "用引力理论计算{彗星轨道}", "c": "red"}, {"t": "text", "at": "h2", "text": "周期约 {76} 年，预言回归", "size": 34}, {"t": "text", "at": "h3", "text": "1759 年如期回归：{哈雷彗星}", "size": 34}], "callout": {"label": "要点", "at": "h4", "text": "理论的{预见力}"}}} />;
