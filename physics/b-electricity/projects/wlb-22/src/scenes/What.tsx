import React from 'react';
import {AutoScene} from '../components/auto';

export const What: React.FC = () => <AutoScene k="what" d={{"tag": "考点一", "title": "什么是传感器", "blocks": [{"t": "chain", "steps": [{"at": "w1", "text": "被测量"}, {"at": "w1", "text": "{传感器}"}, {"at": "w2", "text": "电学量 / 电路通断", "c": "orange"}], "arrows": ["感受", "转换"]}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "声控灯", "at": "w3", "lines": ["感受{声音}", "控制电路通断"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "烟雾报警器", "at": "w3", "lines": ["感受{烟雾}", "输出电信号报警"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "电子秤", "at": "w3", "lines": ["感受{压力}", "输出电信号称重"], "c": "red", "size": 32}]}]}], "callout": {"label": "要点", "at": "w4", "text": "{感受}被测量，{转换}成电信号"}}} />;
