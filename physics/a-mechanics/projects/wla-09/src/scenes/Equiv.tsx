import React from 'react';
import {AutoScene} from '../components/auto';

export const Equiv: React.FC = () => <AutoScene k="equiv" d={{"tag": "考点一", "title": "合力与分力", "blocks": [{"t": "rule", "tag": "合力", "at": "a1", "text": "单独作用的效果 = 几个力{共同作用的效果}", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "a2", "text": "合力 F", "size": 44}]}, {"blocks": [{"t": "big", "at": "a2", "text": "分力 F_1、F_2", "size": 44, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "items", "items": [{"at": "a3", "text": "求合力：{力的合成}"}, {"at": "a3", "text": "求分力：{力的分解}"}], "size": 32}], "callout": {"label": "要点", "at": "a4", "text": "合力与分力是{等效替代}，不能同时画在受力图上"}}} />;
