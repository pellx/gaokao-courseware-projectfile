import React from 'react';
import {AutoScene} from '../components/auto';

export const Period: React.FC = () => <AutoScene k="period" d={{"tag": "考点六", "title": "周期和频率", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "f1", "text": "T = {2π√(LC)}", "size": 54}]}, {"blocks": [{"t": "big", "at": "f2", "text": "f = {1/(2π√(LC))|orange}", "size": 50, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "f3", "text": "由电路本身决定：{固有}周期、固有频率", "size": 36}], "callout": {"label": "要点", "at": "f4", "text": "改变 L 或 C，{改变频率}"}}} />;
