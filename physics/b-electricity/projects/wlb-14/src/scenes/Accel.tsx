import React from 'react';
import {AutoScene} from '../components/auto';

export const Accel: React.FC = () => <AutoScene k="accel" d={{"tag": "考点二", "title": "带电粒子的加速", "blocks": [{"t": "big", "at": "b2", "text": "qU = {mv^2/2 − mv_0^2/2}", "size": 52}, {"t": "rule", "tag": "从静止", "at": "b3", "text": "v = {√(2qU/m)}", "c": "orange", "size": 34}], "callout": {"label": "要点", "at": "b4", "text": "动能定理：匀强、{非匀强}电场都适用"}, "beat": {"k": "car", "at": "b2b", "text": "静电力做正功\n{越跑越快|red}"}}} />;
