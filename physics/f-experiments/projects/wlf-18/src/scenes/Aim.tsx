import React from 'react';
import {AutoScene} from '../components/auto';

export const Aim: React.FC = () => <AutoScene k="aim" d={{"tag": "考点一", "title": "实验目的", "blocks": [{"t": "rule", "tag": "目的", "at": "m1", "text": "了解传感器在{自动控制}中的作用", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "干簧管", "at": "m3", "lines": ["门窗{防盗报警}装置"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "光敏电阻", "at": "m3", "lines": ["{光控开关}"], "c": "orange", "size": 34}]}]}], "callout": {"label": "要点", "at": "m4", "text": "先用传感器{感知}外界变化"}}} />;
