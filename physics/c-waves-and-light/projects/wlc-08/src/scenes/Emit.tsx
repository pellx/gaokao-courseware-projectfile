import React from 'react';
import {AutoScene} from '../components/auto';

export const Emit: React.FC = () => <AutoScene k="emit" d={{"tag": "考点五", "title": "无线电波的发射", "blocks": [{"t": "items", "items": [{"at": "e1", "text": "振荡频率{足够高}"}, {"at": "e2", "text": "电路{开放}"}], "size": 38}, {"t": "rule", "tag": "调制", "at": "e3", "text": "把信号加到{载波}上", "c": "orange"}], "callout": {"label": "要点", "at": "e4", "text": "调幅 {AM}，调频 {FM}"}}} />;
