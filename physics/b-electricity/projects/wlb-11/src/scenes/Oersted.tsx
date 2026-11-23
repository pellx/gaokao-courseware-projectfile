import React from 'react';
import {AutoScene} from '../components/auto';

export const Oersted: React.FC = () => <AutoScene k="oersted" d={{"tag": "考点二", "title": "电流的磁效应与磁场", "blocks": [{"t": "rule", "tag": "奥斯特", "at": "b1", "text": "通电导线使{小磁针偏转}", "c": "red", "size": 32}, {"t": "rule", "tag": "意义", "at": "b2", "text": "电流周围存在磁场：{电与磁有联系}", "c": "orange", "size": 32}, {"t": "chain", "steps": [{"at": "b3", "text": "磁体 / 电流", "c": "orange"}, {"at": "b3", "text": "磁场", "c": "red"}, {"at": "b3", "text": "磁体 / 电流", "c": "orange"}], "arrows": []}], "callout": {"label": "要点", "at": "b4", "text": "磁场是客观存在的{物质}"}, "beat": {"k": "wave", "at": "b3b", "text": "看不见摸不着\n但{真实存在|red}"}}} />;
