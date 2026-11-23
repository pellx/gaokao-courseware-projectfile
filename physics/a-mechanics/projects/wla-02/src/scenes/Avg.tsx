import React from 'react';
import {AutoScene} from '../components/auto';

export const Avg: React.FC = () => <AutoScene k="avg" d={{"tag": "考点二", "title": "平均速度与瞬时速度", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "平均速度", "at": "a1", "lines": ["对应{一段时间}或一段位移", {"at": "a2", "text": "方向：{位移的方向}"}, "粗略描述快慢"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "瞬时速度", "at": "a4", "lines": ["对应{某一时刻}或某一位置", "方向：该时刻{运动方向}", "精确描述快慢"], "c": "orange", "size": 32}]}]}, {"t": "big", "at": "a3", "text": "Δt 非常小：平均速度 → {瞬时速度}（极限思想）", "size": 38}], "callout": {"label": "易错", "at": "a5", "text": "平均速度要指明{哪段时间}或哪段位移"}}} />;
