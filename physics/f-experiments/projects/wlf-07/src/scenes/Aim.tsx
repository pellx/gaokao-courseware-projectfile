import React from 'react';
import {AutoScene} from '../components/auto';

export const Aim: React.FC = () => <AutoScene k="aim" d={{"tag": "考点一", "title": "实验目的与思路", "blocks": [{"t": "rule", "tag": "目的", "at": "a2", "text": "探究平抛运动在{水平方向}和{竖直方向}的运动特点", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "a3", "text": "水平分运动", "size": 40, "c": "orange", "soft": "orangeSoft"}]}, {"blocks": [{"t": "big", "at": "a3", "text": "+", "size": 48}]}, {"blocks": [{"t": "big", "at": "a3", "text": "竖直分运动", "size": 40, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "a3", "text": "思路：{运动的分解}，两个方向分别研究", "size": 34}], "callout": {"label": "要点", "at": "a4", "text": "两个分运动{同时进行、互不影响}，时间相同"}}} />;
