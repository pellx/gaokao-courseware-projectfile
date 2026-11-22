import React from 'react';
import {AutoScene} from '../components/auto';

export const Basic: React.FC = () => <AutoScene k="basic" d={{"tag": "考点一", "title": "做好物理实验的基本要求", "blocks": [{"t": "chain", "steps": [{"at": "a1", "text": "明确目的"}, {"at": "a1", "text": "理解原理"}, {"at": "a2", "text": "制订计划", "c": "orange"}, {"at": "a3", "text": "安全规范操作", "c": "orange"}, {"at": "a4", "text": "如实记录数据"}], "arrows": []}, {"t": "items", "items": [{"at": "a2", "text": "计划：测哪些量、用什么器材、按什么步骤"}, {"at": "a3", "text": "爱护仪器，注意用电安全"}, {"at": "a4", "text": "原始数据{如实记录}，不随意修改"}], "size": 32}], "callout": {"label": "要点", "at": "a5", "text": "数据必须{注明单位}"}}} />;
