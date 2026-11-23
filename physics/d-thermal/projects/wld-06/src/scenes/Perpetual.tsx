import React from 'react';
import {AutoScene} from '../components/auto';

export const Perpetual: React.FC = () => <AutoScene k="perpetual" d={{"tag": "考点九", "title": "第一类永动机", "blocks": [{"t": "rule", "tag": "第一类永动机", "at": "p1", "text": "{不消耗能量}却能不断对外做功", "c": "red"}, {"t": "big", "at": "p3", "text": "违背{能量守恒定律}，不可能制成", "size": 46}], "callout": {"label": "易错", "at": "p4", "text": "不是技术问题，是{违背能量守恒}"}, "beat": {"k": "loop", "at": "p3b", "text": "想一直做功\n就得{补充能量|red}"}}} />;
