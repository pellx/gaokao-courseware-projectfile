import React from 'react';
import {AutoScene} from '../components/auto';

export const Mutual: React.FC = () => <AutoScene k="mutual" d={{"tag": "考点二", "title": "变压器的原理", "blocks": [{"t": "chain", "steps": [{"at": "b1", "text": "原线圈\n交变电流"}, {"at": "b1", "text": "铁芯中\n交变磁通量", "c": "orange"}, {"at": "b2", "text": "副线圈\n{感应电动势}", "c": "red"}], "arrows": []}, {"t": "rule", "tag": "互感", "at": "b2", "text": "原理是{互感现象}", "c": "orange"}], "callout": {"label": "易错", "at": "b4", "text": "不变直流，{不改变频率}"}}} />;
