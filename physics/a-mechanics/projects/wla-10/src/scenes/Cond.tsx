import React from 'react';
import {AutoScene} from '../components/auto';

export const Cond: React.FC = () => <AutoScene k="cond" d={{"tag": "考点二", "title": "平衡条件", "blocks": [{"t": "big", "at": "b2", "text": "F合 = {0}", "size": 64}, {"t": "chain", "steps": [{"at": "b3", "text": "F合 = 0"}, {"at": "b3", "text": "a = 0"}, {"at": "b3", "text": "速度{保持不变}"}], "arrows": []}], "callout": {"label": "要点", "at": "b4", "text": "平衡 ⇔ {F合 = 0} ⇔ a = 0"}, "beat": {"k": "head", "at": "b3b", "text": "重力与支持力抵消\n{合力为零|red}"}}} />;
