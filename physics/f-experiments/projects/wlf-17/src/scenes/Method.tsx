import React from 'react';
import {AutoScene} from '../components/auto';

export const Method: React.FC = () => <AutoScene k="method" d={{"tag": "考点四", "title": "实验方法：控制变量法", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "第一组", "at": "w2", "lines": ["U_1、n_1 不变", "改变 {n_2}", "测 U_2"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "第二组", "at": "w3", "lines": ["n_2 不变", "改变 {n_1}", "测 U_2"], "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "w4", "text": "每次只改变{一个量}"}}} />;
