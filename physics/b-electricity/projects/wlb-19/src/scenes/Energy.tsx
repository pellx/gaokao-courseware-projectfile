import React from 'react';
import {AutoScene} from '../components/auto';

export const Energy: React.FC = () => <AutoScene k="energy" d={{"tag": "考点九", "title": "磁场的能量", "blocks": [{"t": "rule", "tag": "现象", "at": "i1", "text": "断电后灯泡{继续发光}", "c": "red", "size": 32}, {"t": "chain", "steps": [{"at": "i3", "text": "通电：电源做功", "c": "orange"}, {"at": "i3", "text": "储存为磁场能", "c": "red"}, {"at": "i3", "text": "断电：释放", "c": "orange"}], "arrows": []}], "callout": {"label": "要点", "at": "i4", "text": "磁场储存{磁场能}"}}} />;
