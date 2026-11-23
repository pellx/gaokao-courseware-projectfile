import React from 'react';
import {AutoScene} from '../components/auto';

export const Recv: React.FC = () => <AutoScene k="recv" d={{"tag": "考点六", "title": "无线电波的接收", "blocks": [{"t": "chain", "steps": [{"at": "f1", "text": "电谐振"}, {"at": "f2", "text": "调谐", "c": "orange"}, {"at": "f3", "text": "解调", "c": "red"}], "arrows": []}, {"t": "text", "at": "f1", "text": "固有频率 = 电磁波频率 → {电谐振}", "size": 34}], "callout": {"label": "易错", "at": "f4", "text": "发射{调制}；接收{调谐}、{解调}"}}} />;
