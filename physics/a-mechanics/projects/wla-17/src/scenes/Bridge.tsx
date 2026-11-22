import React from 'react';
import {AutoScene} from '../components/auto';

export const Bridge: React.FC = () => <AutoScene k="bridge" d={{"tag": "考点六", "title": "拱形桥与凹形路面", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "拱形桥最高点", "at": "b1", "lines": ["mg − F_N = mv^2/r", "压力{小于}重力", {"at": "b3", "text": "v = √(gr) 时压力为 {0}"}], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "凹形路面最低点", "at": "b4", "lines": ["F_N − mg = mv^2/r", "压力{大于}重力"], "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "b5", "text": "拱顶压力{小于}重力，凹底压力{大于}重力"}, "beat": {"k": "a2", "at": "b3b", "text": "拱形桥顶\n压力{小于重力|red}"}}} />;
