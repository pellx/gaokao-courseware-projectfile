import React from 'react';
import {AutoScene} from '../components/auto';

export const Length: React.FC = () => <AutoScene k="length" d={{"tag": "考点三", "title": "摆长的测量", "blocks": [{"t": "rule", "tag": "摆长", "at": "l1", "text": "{悬点到摆球球心}的距离", "c": "red"}, {"t": "big", "at": "l2", "text": "l = {l_线 + d/2}", "size": 56}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "线长", "at": "l3", "text": "{刻度尺}，摆球自然下垂", "c": "orange", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "直径", "at": "l3", "text": "{游标卡尺}", "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "l4", "text": "摆长 = 线长 + {半径}，别漏加"}}} />;
