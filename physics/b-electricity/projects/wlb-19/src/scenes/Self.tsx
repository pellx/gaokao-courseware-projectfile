import React from 'react';
import {AutoScene} from '../components/auto';

export const Self: React.FC = () => <AutoScene k="self" d={{"tag": "考点七", "title": "自感", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "通电", "at": "g3", "lines": ["串联的灯泡", "{逐渐变亮}"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "断电", "at": "g3", "lines": ["线圈中的电流", "{逐渐减小}"], "c": "red", "size": 32}]}]}, {"t": "items", "items": [{"at": "g4", "text": "利用：日光灯{镇流器}"}, {"at": "g4", "text": "危害：断电时{电火花}"}, {"at": "g4", "text": "消除：{双线绕法}"}], "size": 30}], "callout": {"label": "易错", "at": "g5", "text": "阻碍电流变化，{不能阻止}"}, "beat": {"k": "wake", "at": "g3b", "text": "慢慢醒过来\n电流{逐渐增大|red}"}}} />;
