import React from 'react';
import {AutoScene} from '../components/auto';

export const Emf: React.FC = () => <AutoScene k="emf" d={{"tag": "考点三", "title": "电动势", "blocks": [{"t": "big", "at": "c2", "text": "E = {W/q}", "size": 60}, {"t": "rule", "tag": "意义", "at": "c3", "text": "电源把其他形式的能转化为电势能的{本领}", "c": "orange", "size": 32}, {"t": "rule", "tag": "决定", "at": "c4", "text": "由电源本身决定，与{外电路无关}", "c": "red", "size": 32}], "callout": {"label": "易错", "at": "c5", "text": "电动势：{非静电力}做功　电压：静电力做功"}}} />;
