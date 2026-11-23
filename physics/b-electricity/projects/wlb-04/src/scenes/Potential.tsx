import React from 'react';
import {AutoScene} from '../components/auto';

export const Potential: React.FC = () => <AutoScene k="potential" d={{"tag": "考点五", "title": "电势", "blocks": [{"t": "big", "at": "p1", "text": "φ = {E_p/q}　单位 {V|orange}", "size": 56}, {"t": "items", "items": [{"at": "p2", "text": "{标量}，有正负"}, {"at": "p3", "text": "由{电场本身}决定，与试探电荷无关"}, {"at": "p3", "text": "数值与{零电势点}选取有关"}], "size": 31}], "callout": {"label": "要点", "at": "p4", "text": "比值定义，描述电场的{能的性质}"}, "beat": {"k": "a2", "at": "p3b", "text": "电势像电场里的\n{“高度”|red}"}}} />;
