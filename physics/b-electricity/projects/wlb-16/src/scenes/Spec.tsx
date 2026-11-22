import React from 'react';
import {AutoScene} from '../components/auto';

export const Spec: React.FC = () => <AutoScene k="spec" d={{"tag": "考点一", "title": "质谱仪的构造与原理", "blocks": [{"t": "chain", "steps": [{"at": "s1", "text": "电场加速"}, {"at": "s3", "text": "磁场中偏转半周"}, {"at": "s3", "text": "打到照相底片"}], "arrows": [], "size": 34}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "s2", "text": "加速：{qU = mv^2/2}", "size": 42}]}, {"blocks": [{"t": "big", "at": "s4", "text": "r = {(1/B)√(2mU/q)|orange}", "size": 42, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "s3", "text": "洛伦兹力提供向心力：qvB = mv^2/r", "size": 32}], "callout": {"label": "要点", "at": "s5", "text": "U、B 一定时，半径 r 只由{比荷 q/m}决定"}}} />;
