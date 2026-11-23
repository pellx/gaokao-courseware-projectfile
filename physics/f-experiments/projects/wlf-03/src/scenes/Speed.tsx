import React from 'react';
import {AutoScene} from '../components/auto';

export const Speed: React.FC = () => <AutoScene k="speed" d={{"tag": "考点六", "title": "瞬时速度的测量原理", "blocks": [{"t": "text", "at": "v1", "text": "用{一小段时间内的平均速度}代替瞬时速度，时间越短越接近", "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "打点计时器", "at": "v3", "text": "v_n = {(x_n + x_n+1) / 2T}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "光电门", "at": "v4", "text": "v = {d / Δt}", "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "v5", "text": "遮光条{越窄}，越接近瞬时速度"}}} />;
