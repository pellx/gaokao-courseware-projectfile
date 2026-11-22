import React from 'react';
import {AutoScene} from '../components/auto';

export const Chainlen: React.FC = () => <AutoScene k="chain" d={{"tag": "考点二", "title": "碳链的增长与缩短", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "增长", "at": "cl1", "lines": ["RX + NaCN → RCN → {RCOOH}", "羟醛缩合", "格氏试剂"], "c": "red", "size": 31}]}, {"blocks": [{"t": "panel", "title": "缩短", "at": "cl2", "lines": ["烯烃、炔烃{氧化断键}", "侧链氧化成 —COOH", "脱羧"], "c": "orange", "size": 31}]}]}, {"t": "text", "at": "cl3", "text": "成环：环酯、内酯、双烯加成", "size": 32, "center": true}], "callout": {"label": "易错", "at": "cl4", "text": "碳数增加：找{新 C—C 键}"}, "beat": {"k": "player", "at": "cl3b", "text": "加长剪短\n{都靠特定反应|red}"}}} />;
