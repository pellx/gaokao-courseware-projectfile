import React from 'react';
import {AutoScene} from '../components/auto';

export const Pred: React.FC = () => <AutoScene k="pred" d={{"tag": "考点二", "title": "电磁波的预言与证实", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "麦克斯韦", "at": "b1", "lines": ["{预言}电磁波", "光是电磁波"], "c": "red", "size": 36}]}, {"blocks": [{"t": "panel", "title": "赫兹", "at": "b2", "lines": ["实验{证实}", "速度等于光速"], "c": "orange", "size": 36}]}]}, {"t": "text", "at": "b3", "text": "统一了{电、磁、光}", "size": 36}], "callout": {"label": "要点", "at": "b4", "text": "麦克斯韦{预言}，赫兹{证实}"}}} />;
