import React from 'react';
import {AutoScene} from '../components/auto';

export const Mom: React.FC = () => <AutoScene k="mom" d={{"tag": "考点二", "title": "动量 p = mv", "blocks": [{"t": "big", "at": "p1", "text": "p = {mv}　单位 {kg·m/s|orange}", "size": 50}, {"t": "items", "items": [{"at": "p2", "text": "{矢量}：方向与速度方向相同"}, {"at": "p3", "text": "{状态量}：对应某一时刻"}], "size": 34}], "callout": {"label": "易错", "at": "p4", "text": "动量相同 = {大小相同且方向相同}"}, "beat": {"k": "still", "at": "p3b", "text": "速度为 0 → 动量为 0\n动量是{状态量|red}"}}} />;
