import React from 'react';
import {AutoScene} from '../components/auto';

export const SeriesIU: React.FC = () => <AutoScene k="seriesIU" d={{"tag": "考点一", "title": "串联电路的电流和电压", "blocks": [{"t": "big", "at": "a1", "text": "I = I_1 = I_2 = …", "size": 48}, {"t": "big", "at": "a2", "text": "U = U_1 + U_2 + …", "size": 48, "c": "orange", "soft": "orangeSoft"}], "callout": {"label": "要点", "at": "a3", "text": "串联：电流{处处相等}"}, "beat": {"k": "a1", "at": "a2b", "text": "一个挨一个\n电流{处处相等|red}"}}} />;
