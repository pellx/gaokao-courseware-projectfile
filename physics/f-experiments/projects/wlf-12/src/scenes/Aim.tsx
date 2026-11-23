import React from 'react';
import {AutoScene} from '../components/auto';

export const Aim: React.FC = () => <AutoScene k="aim" d={{"tag": "考点一", "title": "实验目的", "blocks": [{"t": "rule", "tag": "目的", "at": "a3", "text": "观察充、放电过程中{电流}和{电压}的变化", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "充电", "at": "a2", "text": "两极板带上{等量异种电荷}", "c": "orange", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "放电", "at": "a2", "text": "两极板上的电荷{中和}", "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "a4", "text": "认识电容器{储存电荷}的作用"}, "beat": {"k": "bank", "at": "a3b", "text": "把电荷{存起来|red}\n需要时再放出来"}}} />;
