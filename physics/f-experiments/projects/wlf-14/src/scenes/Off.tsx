import React from 'react';
import {AutoScene} from '../components/auto';

export const Off: React.FC = () => <AutoScene k="off" d={{"tag": "考点九", "title": "使用后的处理", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "第一步", "at": "i1", "lines": ["{拔出}表笔"], "c": "orange", "size": 38}]}, {"blocks": [{"t": "panel", "title": "第二步", "at": "i2", "lines": ["旋到 {OFF}", "或交流电压", "{最高挡}"], "c": "red", "size": 38}]}, {"blocks": [{"t": "panel", "title": "长期不用", "at": "i3", "lines": ["{取出}表内电池", "防止漏液"], "c": "orange", "size": 38}]}]}], "callout": {"label": "要点", "at": "i4", "text": "用完旋到 {OFF} 或交流电压最高挡"}, "beat": {"k": "sleep", "at": "i3b", "text": "用完也要“关机休息”\n旋到 {OFF|red} 挡"}}} />;
