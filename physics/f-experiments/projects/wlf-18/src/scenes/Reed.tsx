import React from 'react';
import {AutoScene} from '../components/auto';

export const Reed: React.FC = () => <AutoScene k="reed" d={{"tag": "考点三", "title": "干簧管", "blocks": [{"t": "rule", "tag": "结构", "at": "r1", "text": "玻璃管内两片{软磁性}簧片", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "磁体靠近", "at": "r2", "lines": ["簧片磁化、吸合", "电路{接通}"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "磁体离开", "at": "r3", "lines": ["簧片分开", "电路{断开}"], "c": "orange", "size": 34}]}]}], "callout": {"label": "要点", "at": "r4", "text": "感知磁场的开关：磁场 → {通断}"}, "beat": {"k": "tsukune", "at": "r3b", "text": "磁体来了：{吸合|red}\n磁体走了：分开"}}} />;
