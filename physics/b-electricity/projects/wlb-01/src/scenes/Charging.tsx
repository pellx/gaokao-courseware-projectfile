import React from 'react';
import {AutoScene} from '../components/auto';

export const Charging: React.FC = () => <AutoScene k="charge" d={{"tag": "考点二", "title": "起电的本质", "blocks": [{"t": "items", "items": [{"at": "c1", "text": "原子 = 带正电的{原子核} + 带负电的{电子|orange}"}, {"at": "c2", "text": "金属中有{自由电子}"}], "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "三种起电方式", "at": "c3", "lines": ["摩擦起电", "感应起电", "接触带电"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "big", "at": "c3", "text": "本质：{电子的转移}", "size": 40}]}]}], "callout": {"label": "易错", "at": "c4", "text": "起电{没有创造电荷}，只是电子转移"}, "beat": {"k": "a1", "at": "c3b", "text": "摩擦起电\n电子{转移|red}，等量异号"}}} />;
