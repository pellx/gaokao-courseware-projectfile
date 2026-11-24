import React from 'react';
import {AutoScene} from '../components/auto';

export const Freq: React.FC = () => <AutoScene k="freq" d={{"tag": "考点四", "title": "受迫振动的频率", "blocks": [{"t": "big", "at": "q1", "text": "稳定后：{f受 = f驱}", "size": 60}, {"t": "mark", "ok": false, "at": "q2", "text": "与固有频率{有关}"}, {"t": "mark", "ok": true, "at": "q2", "text": "只由{驱动力频率}决定"}], "callout": {"label": "易错", "at": "q3", "text": "频率看{驱动力}，不看固有频率"}, "beat": {"k": "drum", "at": "q2b", "text": "跟着鼓槌的节奏振动\n频率 = {驱动力频率|red}"}}} />;
