import React from 'react';
import {AutoScene} from '../components/auto';

export const State: React.FC = () => <AutoScene k="state" d={{"tag": "考点三", "title": "动能是状态量", "blocks": [{"t": "rule", "tag": "状态量", "at": "c1", "text": "对应某一{时刻}的速度", "c": "red"}, {"t": "text", "at": "c3", "text": "匀速圆周运动：速度在变，动能{不变}", "size": 34}], "callout": {"label": "易错", "at": "c4", "text": "速度变，动能{不一定}变"}, "beat": {"k": "wheel", "at": "c3b", "text": "方向在变\n动能{不变|red}"}}} />;
