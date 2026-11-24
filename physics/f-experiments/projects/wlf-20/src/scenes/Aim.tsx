import React from 'react';
import {AutoScene} from '../components/auto';

export const Aim: React.FC = () => <AutoScene k="aim" d={{"tag": "考点一", "title": "实验目的", "blocks": [{"t": "rule", "tag": "目的一", "at": "a1", "text": "观察{双缝干涉图样}", "c": "red"}, {"t": "rule", "tag": "目的二", "at": "a2", "text": "测量单色光的{波长}", "c": "orange"}, {"t": "text", "at": "a3", "text": "波长只有几百纳米 → 借干涉条纹{放大}", "size": 32}], "callout": {"label": "要点", "at": "a4", "text": "测波长 → 测{条纹间距}"}}} />;
