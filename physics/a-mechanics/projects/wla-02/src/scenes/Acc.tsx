import React from 'react';
import {AutoScene} from '../components/auto';

export const Acc: React.FC = () => <AutoScene k="acc" d={{"tag": "考点五", "title": "加速度", "blocks": [{"t": "big", "at": "c1", "text": "a = {Δv/Δt}", "size": 64}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "意义", "at": "c2", "text": "速度{变化的快慢}", "c": "red", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "变化量", "at": "c3", "text": "Δv = {v − v_0}", "c": "orange", "size": 34}]}]}, {"t": "text", "at": "c4", "text": "单位：{m/s^2}", "size": 36}], "callout": {"label": "要点", "at": "c5", "text": "a 与 Δv 都是{矢量}"}}} />;
