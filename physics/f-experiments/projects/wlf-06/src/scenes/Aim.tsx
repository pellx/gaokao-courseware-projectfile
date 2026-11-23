import React from 'react';
import {AutoScene} from '../components/auto';

export const Aim: React.FC = () => <AutoScene k="aim" d={{"tag": "考点一", "title": "实验目的与方法", "blocks": [{"t": "rule", "tag": "方法", "at": "a2", "text": "{控制变量法}", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "m 不变", "at": "a3", "lines": ["改变拉力 F", {"at": "a3", "text": "研究 {a 与 F}"}], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "F 不变", "at": "a3", "lines": ["改变质量 m", {"at": "a3", "text": "研究 {a 与 m}"}], "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "a4", "text": "每次只改变{一个量}"}}} />;
