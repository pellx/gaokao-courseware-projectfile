import React from 'react';
import {AutoScene} from '../components/auto';

export const Work: React.FC = () => <AutoScene k="work" d={{"tag": "考点一", "title": "静电力做功的特点", "blocks": [{"t": "big", "at": "w1", "text": "静电力做功 {与路径无关}", "size": 48}, {"t": "text", "at": "w2", "text": "只与{起点、终点}位置有关", "size": 34}, {"t": "rule", "tag": "类比", "at": "w3", "text": "{重力做功}", "c": "orange", "size": 32}], "callout": {"label": "要点", "at": "w4", "text": "与路径无关 → 可以引入{电势能}"}, "beat": {"k": "a1", "at": "w3b", "text": "岔路再多\n做功{都一样|red}"}}} />;
