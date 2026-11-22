import React from 'react';
import {AutoScene} from '../components/auto';

export const Core: React.FC = () => <AutoScene k="core" d={{"tag": "考点一", "title": "绿色化学的核心", "blocks": [{"t": "big", "at": "co1", "text": "从{源头}上减少或消除污染", "size": 46}, {"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": true, "at": "co3", "text": "无毒原料、催化剂、绿色溶剂", "size": 30}]}, {"blocks": [{"t": "mark", "ok": false, "at": "co2", "text": "先污染后治理", "size": 30}]}]}], "callout": {"label": "易错", "at": "co4", "text": "末端治理{不是}绿色化学的核心"}, "beat": {"k": "green", "at": "co3b", "text": "不是污染了再收拾\n而是{一开始就不产生|red}"}}} />;
