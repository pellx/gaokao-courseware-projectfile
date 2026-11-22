import React from 'react';
import {AutoScene} from '../components/auto';

export const Range: React.FC = () => <AutoScene k="range" d={{"tag": "考点四", "title": "合力的大小范围", "blocks": [{"t": "big", "at": "d2", "text": "{|F_1 − F_2|} ≤ F ≤ {F_1 + F_2}", "size": 52}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "同向", "at": "d1", "text": "合力最大：F_1 + F_2", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "反向", "at": "d1", "text": "合力最小：|F_1 − F_2|", "c": "orange", "size": 32}]}]}, {"t": "text", "at": "d3", "text": "夹角{越大}，合力{越小}", "size": 34}], "callout": {"label": "易错", "at": "d4", "text": "合力可以{大于、等于或小于}分力"}, "beat": {"k": "wave", "at": "d3b", "text": "方向越分开\n合力{越小|red}"}}} />;
