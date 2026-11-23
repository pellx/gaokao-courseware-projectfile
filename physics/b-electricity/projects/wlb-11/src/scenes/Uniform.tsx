import React from 'react';
import {AutoScene} from '../components/auto';

export const Uniform: React.FC = () => <AutoScene k="uniform" d={{"tag": "考点七", "title": "匀强磁场", "blocks": [{"t": "rule", "tag": "定义", "at": "g1", "text": "B 处处{大小相等、方向相同}", "c": "red", "size": 32}, {"t": "rule", "tag": "磁感线", "at": "g2", "text": "{间隔相等的平行直线}", "c": "orange", "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "实例一", "at": "g3", "lines": ["相距很近的", "{异名磁极}之间"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "实例二", "at": "g3", "lines": ["通电螺线管", "{内部}"], "c": "red", "size": 32}]}]}], "callout": {"label": "要点", "at": "g4", "text": "匀强磁场：B {处处相同}"}, "beat": {"k": "line", "at": "g3b", "text": "方向相同\n大小{处处一样|red}"}}} />;
