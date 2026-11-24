import React from 'react';
import {AutoScene} from '../components/auto';

export const Aim: React.FC = () => <AutoScene k="aim" d={{"tag": "考点一", "title": "实验目的", "blocks": [{"t": "rule", "tag": "目的", "at": "m1", "text": "探究压强 {p} 与体积 {V} 的关系", "c": "red"}, {"t": "rule", "tag": "等温变化", "at": "m2", "text": "{温度不变}时的状态变化", "c": "orange"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "前提一", "at": "m3", "lines": ["质量 m {不变}"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "前提二", "at": "m3", "lines": ["温度 T {不变}"], "c": "orange", "size": 34}]}]}], "callout": {"label": "要点", "at": "m3", "text": "{质量}和{温度}都不变"}}} />;
