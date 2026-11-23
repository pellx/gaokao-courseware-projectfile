import React from 'react';
import {AutoScene} from '../components/auto';

export const HalfLife: React.FC = () => <AutoScene k="halflife" d={{"tag": "考点八", "title": "半衰期", "blocks": [{"t": "rule", "tag": "半衰期 T", "at": "h1", "text": "原子核有{半数}发生衰变所需的时间", "c": "red"}, {"t": "big", "at": "h2", "text": "剩余：N = N_0 ×（1/2）的 {t/T} 次方", "size": 42}, {"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": true, "at": "h3", "text": "由{核内部因素}决定"}]}, {"blocks": [{"t": "mark", "ok": false, "at": "h3", "text": "受温度、压强、化学状态影响"}]}]}], "callout": {"label": "易错", "at": "h4", "text": "半衰期是{大量}原子核的统计规律"}, "beat": {"k": "half", "at": "h3b", "text": "每过一个 T\n剩下{一半|red}"}}} />;
