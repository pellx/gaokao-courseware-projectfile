import React from 'react';
import {AutoScene} from '../components/auto';

export const Current: React.FC = () => <AutoScene k="current" d={{"tag": "考点三", "title": "电流", "blocks": [{"t": "big", "at": "c1", "text": "I = {q/t}　1 A = {1 C/s|orange}", "size": 52}, {"t": "text", "at": "c2", "text": "方向：{正电荷}定向移动的方向", "size": 34}], "callout": {"label": "易错", "at": "c3", "text": "电流有方向，但是{标量}"}}} />;
