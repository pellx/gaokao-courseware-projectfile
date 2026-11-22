import React from 'react';
import {AutoScene} from '../components/auto';

export const Principle: React.FC = () => <AutoScene k="principle" d={{"tag": "考点二", "title": "实验原理", "blocks": [{"t": "big", "at": "p1", "text": "重力势能减少量　{mgΔh}", "size": 44}, {"t": "big", "at": "p2", "text": "动能增加量　{½mv_2^2 − ½mv_1^2|orange}", "size": 44, "c": "orange", "soft": "orangeSoft"}, {"t": "big", "at": "p3", "text": "mgΔh = ½mv_2^2 − ½mv_1^2　→　{gΔh = ½v_2^2 − ½v_1^2}", "size": 38}], "callout": {"label": "要点", "at": "p4", "text": "两边都有 m，可以约去：{不必测质量}"}, "beat": {"k": "cake", "at": "p3b", "text": "蛋糕换了手，{一点没少|red}\n势能减少 = 动能增加"}}} />;
