import React from 'react';
import {AutoScene} from '../components/auto';

export const History: React.FC = () => <AutoScene k="history" d={{"tag": "考点八", "title": "能量守恒定律的发现", "blocks": [{"t": "chain", "steps": [{"at": "d2", "text": "迈尔：提出{守恒思想}"}, {"at": "d2", "text": "焦耳：测定{热功关系}"}, {"at": "d3", "text": "亥姆霍兹：推广到{各领域}", "c": "orange"}], "arrows": []}, {"t": "text", "at": "d1", "text": "摩擦生热、电流热效应、电磁感应、化学反应放热：彼此{有联系|orange}", "size": 32}], "callout": {"label": "要点", "at": "d4", "text": "自然界{最普遍、最重要}的规律之一"}}} />;
