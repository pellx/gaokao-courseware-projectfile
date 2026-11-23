import React from 'react';
import {AutoScene} from '../components/auto';

export const Force: React.FC = () => <AutoScene k="force" d={{"tag": "考点二", "title": "向心力来源", "blocks": [{"t": "rule", "tag": "方向", "at": "b1", "text": "始终与速度{垂直}，只改变速度方向", "c": "red", "size": 32}, {"t": "rule", "tag": "大小", "at": "b2", "text": "qvB {不变}", "c": "orange", "size": 32}, {"t": "big", "at": "b3", "text": "qvB = {mv^2/r}", "size": 56}], "callout": {"label": "要点", "at": "b4", "text": "洛伦兹力提供{向心力}"}}} />;
