import React from 'react';
import {AutoScene} from '../components/auto';

export const Trap: React.FC = () => <AutoScene k="trap" d={{"tag": "考点九", "title": "易错提醒", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "接直流", "at": "x2", "text": "Φ 不变 → 副线圈{无电压}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "铁芯不闭合", "at": "x3", "text": "漏磁多 → U_2 {明显偏小|orange}", "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "x4", "text": "变压器{不能变直流}"}, "beat": {"k": "family", "at": "x3b", "text": "铁芯要{合拢|red}\n磁感线才不漏"}}} />;
