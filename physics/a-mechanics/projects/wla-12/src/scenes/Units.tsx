import React from 'react';
import {AutoScene} from '../components/auto';

export const Units: React.FC = () => <AutoScene k="units" d={{"tag": "考点六", "title": "单位制", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "基本单位", "at": "f1", "lines": ["基本量的单位"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "导出单位", "at": "f2", "lines": ["由物理关系{推导}"], "c": "orange", "size": 34}]}]}, {"t": "big", "at": "f3", "text": "基本单位 + 导出单位 = {单位制}", "size": 42}], "callout": {"label": "要点", "at": "f4", "text": "导出单位由基本单位经{物理关系}推出"}, "beat": {"k": "three", "at": "f3b", "text": "三个基本量：长度、质量、时间\n其余单位{都能导出|red}"}}} />;
