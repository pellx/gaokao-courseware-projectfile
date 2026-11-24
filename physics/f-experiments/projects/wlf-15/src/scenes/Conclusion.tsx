import React from 'react';
import {AutoScene} from '../components/auto';

export const Conclusion: React.FC = () => <AutoScene k="conclusion" d={{"tag": "考点八", "title": "实验结论", "blocks": [{"t": "big", "at": "h1", "text": "I 增大　→　U {线性减小}", "size": 48}, {"t": "big", "at": "h2", "text": "U-I 图线：{倾斜的直线}", "size": 44, "c": "orange", "soft": "orangeSoft"}, {"t": "text", "at": "h3", "text": "干电池：E 约 1.5 V，r 约零点几欧到一欧多", "size": 32, "center": true}], "callout": {"label": "要点", "at": "h4", "text": "{截距求 E，斜率求 r}"}}} />;
