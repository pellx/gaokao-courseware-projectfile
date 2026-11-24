import React from 'react';
import {AutoScene} from '../components/auto';

export const Convert: React.FC = () => <AutoScene k="convert" d={{"tag": "考点二", "title": "非电学量转换成电学量", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "非电学量", "at": "c1", "lines": ["力、温度、光", "磁场、声音"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "电学量", "at": "c2", "lines": ["电压、电流、电阻", "电路通断"], "c": "red", "size": 32}]}]}, {"t": "big", "at": "c2", "text": "便于{测量、传输、处理和控制}", "size": 44}], "callout": {"label": "要点", "at": "c4", "text": "非电学量 → {电学量}"}}} />;
