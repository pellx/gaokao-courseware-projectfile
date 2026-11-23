import React from 'react';
import {AutoScene} from '../components/auto';

export const Intf: React.FC = () => <AutoScene k="intf" d={{"tag": "考点六", "title": "波的干涉", "blocks": [{"t": "panel", "title": "相干条件", "at": "f1", "lines": ["{频率相同}", "相位差恒定", "振动方向相同"], "c": "red", "size": 36}, {"t": "text", "at": "f2", "text": "加强区与减弱区{相互间隔、位置稳定}", "size": 34}], "callout": {"label": "要点", "at": "f4", "text": "{干涉、衍射}是波特有的现象"}, "beat": {"k": "teacher", "at": "f3b", "text": "相干条件\n{缺一不可|red}"}}} />;
