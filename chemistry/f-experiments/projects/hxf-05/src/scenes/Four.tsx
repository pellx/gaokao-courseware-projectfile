import React from 'react';
import {AutoScene} from '../components/auto';

export const Four: React.FC = () => <AutoScene k="four" d={{"tag": "考点一", "title": "检验的答题四要素", "blocks": [{"t": "chain", "steps": [{"at": "fo1", "text": "{取样}"}, {"at": "fo1", "text": "{操作}"}, {"at": "fo1", "text": "{现象}"}, {"at": "fo1", "text": "{结论}"}], "arrows": [], "center": true, "size": 44}, {"t": "text", "at": "fo2", "text": "“取少量待测液于试管中，滴加……，若……，则……”", "size": 33, "center": true}], "callout": {"label": "答题模板", "at": "fo4", "text": "现象要具体，“若……则……”{一一对应}"}, "beat": {"k": "soda", "at": "fo3b", "text": "取样、操作、现象、结论\n{一步都不能跳|red}"}}} />;
