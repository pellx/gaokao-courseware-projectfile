import React from 'react';
import {AutoScene} from '../components/auto';

export const Aim: React.FC = () => <AutoScene k="aim" d={{"tag": "考点一", "title": "实验目的", "blocks": [{"t": "rule", "tag": "目的", "at": "m2", "text": "探究原、副线圈的{电压}与{匝数}的关系", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "原线圈", "at": "m3", "text": "接{电源}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "副线圈", "at": "m3", "text": "接{负载|orange}", "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "m4", "text": "找 {U_1、U_2} 与 {n_1、n_2} 的关系"}}} />;
