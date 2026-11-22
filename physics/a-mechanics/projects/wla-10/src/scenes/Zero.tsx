import React from 'react';
import {AutoScene} from '../components/auto';

export const Zero: React.FC = () => <AutoScene k="zero" d={{"tag": "考点七", "title": "速度为 0 不等于平衡", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": false, "at": "g1", "text": "速度为 0 → 平衡"}]}, {"blocks": [{"t": "mark", "ok": true, "at": "g3", "text": "合力为 0 → 平衡"}]}]}, {"t": "panel", "title": "竖直上抛最高点", "at": "g2", "lines": ["v = 0", "只受重力，{F合 = mg}", "a = {g}，不平衡"], "c": "red", "size": 32}], "callout": {"label": "易错", "at": "g4", "text": "瞬时速度为 0 {不是静止}，也不是平衡"}, "beat": {"k": "jump", "at": "g2b", "text": "最高点瞬间 v = 0\n但重力还在\n{不是平衡|red}"}}} />;
