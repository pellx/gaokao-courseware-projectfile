import React from 'react';
import {AutoScene} from '../components/auto';

export const Four: React.FC = () => <AutoScene k="four" d={{"tag": "考点一", "title": "判断四步法", "blocks": [{"t": "chain", "steps": [{"at": "fo1", "text": "{试剂}"}, {"at": "fo2", "text": "{装置}"}, {"at": "fo3", "text": "导管"}, {"at": "fo3", "text": "条件"}], "arrows": [], "center": true, "size": 42}, {"t": "items", "items": [{"at": "fo1", "text": "试剂：能否反应、浓稀、产物"}, {"at": "fo2", "text": "装置：仪器是否合适"}, {"at": "fo3", "text": "导管：{长进短出}"}, {"at": "fo3", "text": "条件：加热、尾气处理"}], "size": 33}], "callout": {"label": "解题方法", "at": "fo4", "text": "{一处错}就不能达到目的"}, "beat": {"k": "four", "at": "fo3b", "text": "试剂、装置、导管、条件\n{一样一样查|red}"}}} />;
