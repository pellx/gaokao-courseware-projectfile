import React from 'react';
import {AutoScene} from '../components/auto';

export const Uniform: React.FC = () => <AutoScene k="uniform" d={{"tag": "考点一", "title": "匀速圆周运动", "blocks": [{"t": "rule", "tag": "定义", "at": "a1", "text": "线速度{大小处处相等}", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "a2", "text": "速度方向变 → {变速运动}", "size": 36}]}, {"blocks": [{"t": "big", "at": "a3", "text": "加速度方向变 → {变加速|orange}", "size": 36, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "易错", "at": "a4", "text": "“匀速”只指{速率不变}"}, "beat": {"k": "wheel", "at": "a3b", "text": "“匀速”\n只是{速率不变|red}"}}} />;
