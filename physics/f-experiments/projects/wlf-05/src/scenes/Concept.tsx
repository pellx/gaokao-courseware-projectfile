import React from 'react';
import {AutoScene} from '../components/auto';

export const Concept: React.FC = () => <AutoScene k="concept" d={{"tag": "考点七", "title": "理论值与测量值", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "F：理论值", "at": "c1", "text": "平行四边形的{对角线}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "F′：测量值", "at": "c2", "text": "一个测力计{实际拉出}，{一定沿橡皮条}", "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "c4", "text": "沿橡皮条方向的是 {F′（测量值）}"}}} />;
