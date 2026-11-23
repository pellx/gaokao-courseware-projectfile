import React from 'react';
import {AutoScene} from '../components/auto';

export const Dx: React.FC = () => <AutoScene k="dx" d={{"tag": "考点七", "title": "连续相等时间内的位移差", "blocks": [{"t": "big", "at": "n1", "text": "Δx = {aT^2}", "size": 64}, {"t": "text", "at": "n2", "text": "x_2 − x_1 = x_3 − x_2 = …… = aT^2", "size": 36}, {"t": "rule", "tag": "依据", "at": "n3", "text": "位移差都相等 → {匀变速直线运动}", "c": "red", "size": 34}], "callout": {"label": "要点", "at": "n4", "text": "必须是{连续}相等时间内的位移"}, "beat": {"k": "photo", "at": "n3b", "text": "每隔 T 拍一张\n位移差 = {aT^2|red}"}}} />;
