import React from 'react';
import {AutoScene} from '../components/auto';

export const Proj: React.FC = () => <AutoScene k="proj" d={{"tag": "考点一", "title": "抛体运动", "blocks": [{"t": "rule", "tag": "条件", "at": "a1", "text": "有初速度，{只受重力}", "c": "red"}, {"t": "big", "at": "a2", "text": "a = {g}，竖直向下", "size": 48}, {"t": "text", "at": "a3", "text": "→ {匀变速曲线运动}", "size": 36}], "callout": {"label": "要点", "at": "a4", "text": "加速度{恒为 g}"}, "beat": {"k": "pancake", "at": "a3b", "text": "离开锅以后\n{只受重力|red}"}}} />;
