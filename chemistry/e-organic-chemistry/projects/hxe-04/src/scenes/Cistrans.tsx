import React from 'react';
import {AutoScene} from '../components/auto';

export const Cistrans: React.FC = () => <AutoScene k="cistrans" d={{"tag": "考点三", "title": "顺反异构", "blocks": [{"t": "big", "at": "ct1", "text": "双键两端的碳{各连两个不同基团} → 有顺反异构", "size": 38}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "顺式", "at": "ct2", "text": "相同基团在{同侧}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "反式", "at": "ct2", "text": "相同基团在{异侧|orange}", "c": "orange", "size": 32}]}]}, {"t": "text", "at": "ct3", "text": "CH2=CHCH2CH3：一端连两个 H → {无顺反异构}", "size": 32, "center": true}], "callout": {"label": "易错", "at": "ct4", "text": "{两端都要看}：有一端连相同基团就没有"}, "beat": {"k": "couple", "at": "ct2b", "text": "同侧：{顺式|red}\n异侧：{反式|red}"}}} />;
