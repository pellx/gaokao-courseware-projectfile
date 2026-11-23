import React from 'react';
import {AutoScene} from '../components/auto';

export const Up: React.FC = () => <AutoScene k="up" d={{"tag": "考点八", "title": "竖直上抛运动", "blocks": [{"t": "rule", "tag": "定义", "at": "u1", "text": "竖直向上抛出，{只受重力}", "c": "red", "size": 34}, {"t": "text", "at": "u2", "text": "全程 a = {g}，竖直向下", "size": 36}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "u3", "text": "v = {v_0 − gt}", "size": 44}]}, {"blocks": [{"t": "big", "at": "u3", "text": "h = {v_0t − ½gt^2}", "size": 44}]}]}], "callout": {"label": "易错", "at": "u4", "text": "最高点 v = 0，a = g {≠ 0}"}, "beat": {"k": "ball", "at": "u3b", "text": "上升：越来越慢\n下落：越来越快\na 始终 = {g|red}"}}} />;
