import React from 'react';
import {AutoScene} from '../components/auto';

export const Parts: React.FC = () => <AutoScene k="parts" d={{"tag": "考点三", "title": "传感器的组成", "blocks": [{"t": "chain", "steps": [{"at": "p1", "text": "被测量"}, {"at": "p2", "text": "{敏感元件}"}, {"at": "p3", "text": "转换元件", "c": "orange"}, {"at": "p3", "text": "电信号"}], "arrows": []}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "敏感元件", "at": "p2", "lines": ["{直接感受}被测量", "输出与它有确定关系的量"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "转换元件", "at": "p3", "lines": ["把敏感元件的输出", "转换成{电信号}"], "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "p4", "text": "直接感受被测量的是{敏感元件}"}}} />;
