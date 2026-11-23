import React from 'react';
import {AutoScene} from '../components/auto';

export const Temp: React.FC = () => <AutoScene k="temp" d={{"tag": "考点四", "title": "温度", "blocks": [{"t": "big", "at": "t1", "text": "热平衡的系统具有相同的{温度}", "size": 46}, {"t": "rule", "tag": "测温原理", "at": "t3", "text": "温度计与物体达到{热平衡|orange}", "c": "orange"}], "callout": {"label": "要点", "at": "t4", "text": "热平衡 ⇔ {温度相同}"}}} />;
