import React from 'react';
import {AutoScene} from '../components/auto';

export const Trap: React.FC = () => <AutoScene k="trap" d={{"tag": "考点九", "title": "易错提醒", "blocks": [{"t": "mark", "ok": true, "at": "x1", "text": "Δx = {a/(n − 1)}"}, {"t": "mark", "ok": false, "at": "x3", "text": "Δx = a/n：{偏小}，波长也偏小"}, {"t": "text", "at": "x2", "text": "第 1 条到第 6 条亮条纹：{5 个}间距", "size": 34}], "callout": {"label": "易错", "at": "x4", "text": "用 {a/(n − 1)}，不用 a/n"}, "beat": {"k": "row", "at": "x2b", "text": "4 个人，{3 个|red}空隙\nn 条亮纹，n − 1 个间距"}}} />;
