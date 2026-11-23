import React from 'react';
import {AutoScene} from '../components/auto';

export const Rate: React.FC = () => <AutoScene k="rate" d={{"tag": "考点三", "title": "速率", "blocks": [{"t": "rule", "tag": "速率", "at": "r1", "text": "{瞬时速度的大小}，标量", "c": "red", "size": 36}, {"t": "text", "at": "r2", "text": "速度表显示的是{瞬时速率}", "size": 34}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "r3", "text": "平均速率 = {路程} / 时间", "size": 36}]}, {"blocks": [{"t": "big", "at": "r3", "text": "平均速度大小 = {位移|orange} / 时间", "size": 36, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "r4", "text": "只有{单向直线运动}，两者才相等", "size": 32}], "callout": {"label": "易错", "at": "r5", "text": "跑一圈：平均速度 {0}，平均速率不为 0"}}} />;
