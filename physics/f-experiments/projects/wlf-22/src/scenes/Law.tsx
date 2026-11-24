import React from 'react';
import {AutoScene} from '../components/auto';

export const Law: React.FC = () => <AutoScene k="law" d={{"tag": "考点九", "title": "实验结论", "blocks": [{"t": "big", "at": "c2", "text": "{pV = C}　　p_1 V_1 = p_2 V_2", "size": 64}, {"t": "rule", "tag": "结论", "at": "c1", "text": "T 不变：p 与 V 成{反比}", "c": "red"}, {"t": "rule", "tag": "定律", "at": "c3", "text": "{玻意耳定律}", "c": "orange"}], "callout": {"label": "要点", "at": "c4", "text": "条件：{质量一定、温度不变}"}, "beat": {"k": "train", "at": "c3b", "text": "空间越小，挤得越紧\nV 越小，p {越大|red}"}}} />;
