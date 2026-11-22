import React from 'react';
import {AutoScene} from '../components/auto';

export const Temp: React.FC = () => <AutoScene k="temp" d={{"tag": "考点三", "title": "K 只与温度有关", "blocks": [{"t": "big", "at": "tk1", "text": "K 只与{温度}有关", "size": 50}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "放热反应", "at": "tk2", "text": "升温：K {减小}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "吸热反应", "at": "tk2", "text": "升温：K {增大|orange}", "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "tk4", "text": "浓度、压强使平衡移动，K {不变}"}, "beat": {"k": "stage", "at": "tk3b", "text": "K 只认\n{温度|red}"}}} />;
