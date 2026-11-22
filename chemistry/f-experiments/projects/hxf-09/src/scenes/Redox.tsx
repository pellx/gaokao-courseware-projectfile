import React from 'react';
import {AutoScene} from '../components/auto';

export const Redox: React.FC = () => <AutoScene k="redox" d={{"tag": "考点二", "title": "用氧化还原能力解释", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "浓度", "at": "rx2", "text": "氧化剂浓度增大 → {氧化性增强}", "c": "red", "size": 31}]}, {"blocks": [{"t": "rule", "tag": "酸碱性", "at": "rx3", "text": "MnO4^-、NO3^- 在{酸性}下更强", "c": "orange", "size": 31}]}]}, {"t": "text", "at": "rx2", "text": "生成物（如沉淀）浓度减小 → {推动反应进行}", "size": 32, "center": true}], "callout": {"label": "答题模板", "at": "rx4", "text": "“c(H^+) 增大，{氧化性增强}，能把……氧化”"}}} />;
