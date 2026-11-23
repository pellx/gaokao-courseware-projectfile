import React from 'react';
import {AutoScene} from '../components/auto';

export const Eddy: React.FC = () => <AutoScene k="eddy" d={{"tag": "考点二", "title": "涡流及其应用", "blocks": [{"t": "rule", "tag": "涡流", "at": "b1", "text": "块状金属中的{旋涡状}感应电流", "c": "red", "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "热效应", "at": "b3", "lines": ["真空冶炼炉", "{电磁炉}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "磁效应", "at": "b4", "lines": ["金属探测器", "{探雷器、安检门}"], "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "b5", "text": "涡流也是{电磁感应}"}, "beat": {"k": "swirl", "at": "b2b", "text": "一圈一圈打着旋\n{涡流|red}"}}} />;
