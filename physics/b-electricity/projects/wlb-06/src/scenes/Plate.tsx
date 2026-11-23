import React from 'react';
import {AutoScene} from '../components/auto';

export const Plate: React.FC = () => <AutoScene k="plate" d={{"tag": "考点五", "title": "平行板电容器", "blocks": [{"t": "big", "at": "p1", "text": "C = {ε_rS/4πkd}", "size": 60}, {"t": "items", "items": [{"at": "p2", "text": "S 越大，C {越大}；d 越大，C {越小|orange}"}, {"at": "p3", "text": "插入电介质，C {增大}"}], "size": 32}], "callout": {"label": "要点", "at": "p4", "text": "Q/U：{定义式}；ε_rS/4πkd：{决定式}"}, "beat": {"k": "a2", "at": "p3b", "text": "S 越大、d 越小\n电容{越大|red}"}}} />;
