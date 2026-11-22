import React from 'react';
import {AutoScene} from '../components/auto';

export const Mutual: React.FC = () => <AutoScene k="mutual" d={{"tag": "考点二", "title": "实验原理", "blocks": [{"t": "chain", "steps": [{"at": "p1", "text": "原线圈：交变电流"}, {"at": "p1", "text": "铁芯：交变磁通量", "c": "orange"}, {"at": "p2", "text": "穿过副线圈"}, {"at": "p3", "text": "副线圈：感应电动势"}], "arrows": []}], "callout": {"label": "要点", "at": "p4", "text": "原理：{互感}；关键：磁通量在{变化}"}}} />;
