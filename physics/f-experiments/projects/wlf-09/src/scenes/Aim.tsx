import React from 'react';
import {AutoScene} from '../components/auto';

export const Aim: React.FC = () => <AutoScene k="aim" d={{"tag": "考点一", "title": "实验目的", "blocks": [{"t": "rule", "tag": "目的", "at": "a1", "text": "只有重力做功时，{动能与重力势能相互转化}，总机械能不变", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "a2", "text": "重力势能减少量", "size": 40, "c": "orange", "soft": "orangeSoft"}]}, {"blocks": [{"t": "big", "at": "a2", "text": "= ?", "size": 48}]}, {"blocks": [{"t": "big", "at": "a2", "text": "动能增加量", "size": 40, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "a3", "text": "情境：{重物自由下落}，阻力很小，近似只有重力做功", "size": 32}], "callout": {"label": "要点", "at": "a4", "text": "比较的是{两个变化量}，不是某一时刻的机械能"}, "beat": {"k": "hang", "at": "a3b", "text": "一松手就自由下落\n{只有重力做功|red}"}}} />;
