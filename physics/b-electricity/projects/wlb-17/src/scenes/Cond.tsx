import React from 'react';
import {AutoScene} from '../components/auto';

export const Cond: React.FC = () => <AutoScene k="cond" d={{"tag": "考点二", "title": "产生感应电流的条件", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "条件一", "at": "b2", "lines": ["导体回路{闭合}"], "c": "orange", "size": 34}]}, {"blocks": [{"t": "panel", "title": "条件二", "at": "b2", "lines": ["磁通量{发生变化}"], "c": "red", "size": 34}]}]}, {"t": "rule", "tag": "不闭合", "at": "b3", "text": "只有{感应电动势}，没有感应电流", "c": "orange", "size": 32}], "callout": {"label": "易错", "at": "b4", "text": "磁通量大不等于有电流，要{变化}"}, "beat": {"k": "finger", "at": "b2b", "text": "手指连成一圈\n回路要{闭合|red}"}}} />;
