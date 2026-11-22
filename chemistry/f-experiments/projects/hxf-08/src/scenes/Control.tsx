import React from 'react';
import {AutoScene} from '../components/auto';

export const Control: React.FC = () => <AutoScene k="control" d={{"tag": "考点三", "title": "控制变量", "blocks": [{"t": "big", "at": "co1", "text": "{只改变一个条件}，其他完全相同", "size": 44}, {"t": "items", "items": [{"at": "co2", "text": "常见变量：浓度、温度、酸碱性、催化剂、{O2}、光照"}, {"at": "co3", "text": "改变体积时{用水补足总体积}"}], "size": 33}], "callout": {"label": "答题模板", "at": "co4", "text": "“其他条件相同，{只改变某条件}……”"}, "beat": {"k": "dots", "at": "co3b", "text": "两组实验\n{只能有一处不同|red}"}}} />;
