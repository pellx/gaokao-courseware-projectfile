import React from 'react';
import {AutoScene} from '../components/auto';

export const Param: React.FC = () => <AutoScene k="param" d={{"tag": "考点一", "title": "状态参量", "blocks": [{"t": "rule", "tag": "系统", "at": "p1", "text": "研究对象；与它相互作用的其他物体叫{外界}", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "p2", "text": "压强 {p}", "size": 46}]}, {"blocks": [{"t": "big", "at": "p2", "text": "体积 {V}", "size": 46}]}, {"blocks": [{"t": "big", "at": "p2", "text": "温度 {T}", "size": 46}]}]}], "callout": {"label": "要点", "at": "p3", "text": "V 几何参量、p 力学参量、T {热学参量}"}, "beat": {"k": "balloon", "at": "p2b", "text": "三只气球\n三个状态参量 {p、V、T|red}"}}} />;
