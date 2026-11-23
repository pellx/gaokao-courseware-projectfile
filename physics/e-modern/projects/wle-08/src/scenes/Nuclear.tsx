import React from 'react';
import {AutoScene} from '../components/auto';

export const Nuclear: React.FC = () => <AutoScene k="nuclear" d={{"tag": "考点二", "title": "核力", "blocks": [{"t": "rule", "tag": "核力", "at": "b2", "text": "{强相互作用}的表现，比库仑力大得多", "c": "red"}, {"t": "big", "at": "b3", "text": "短程力：约 {10^-15 m}", "size": 50}], "callout": {"label": "要点", "at": "b4", "text": "核子{克服库仑斥力}紧密结合"}, "beat": {"k": "hug", "at": "b3b", "text": "贴得近才抱得紧\n{短程|red}强力"}}} />;
