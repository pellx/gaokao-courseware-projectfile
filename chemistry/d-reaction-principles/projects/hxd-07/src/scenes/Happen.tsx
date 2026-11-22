import React from 'react';
import {AutoScene} from '../components/auto';

export const Happen: React.FC = () => <AutoScene k="happen" d={{"tag": "考点三", "title": "自发不等于发生", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "自发", "at": "ha1", "text": "{能不能}：判据说了算", "c": "red", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "快慢", "at": "ha1", "text": "{快不快}：看速率", "c": "orange", "size": 34}]}]}, {"t": "text", "at": "ha2", "text": "常温 H2 + O2：自发，但{速率极慢}，需点燃或催化剂", "size": 32}, {"t": "text", "at": "ha3", "text": "电解：外界做功，可使{非自发}反应发生", "size": 32}], "callout": {"label": "易错", "at": "ha4", "text": "自发 ≠ 迅速；非自发可借{通电、光照}发生"}, "beat": {"k": "ponder", "at": "ha2b", "text": "{能不能|red} 和 {快不快|red}\n是两回事"}}} />;
