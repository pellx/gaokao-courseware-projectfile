import React from 'react';
import {AutoScene} from '../components/auto';

export const TwoCar: React.FC = () => <AutoScene k="twocar" d={{"tag": "考点六", "title": "参考案例 2：两车对比", "blocks": [{"t": "text", "at": "t1", "text": "两车{同时开始}、{同时停止}　→　时间 t 相等", "size": 34}, {"t": "big", "at": "t3", "text": "x = ½at^2　→　{x_1 : x_2 = a_1 : a_2}", "size": 46}], "callout": {"label": "要点", "at": "t4", "text": "{位移之比}代替{加速度之比}"}}} />;
