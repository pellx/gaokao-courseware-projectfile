import React from 'react';
import {AutoScene} from '../components/auto';

export const Clarify: React.FC = () => <AutoScene k="clarify" d={{"tag": "考点九", "title": "概念辨析", "blocks": [{"t": "mark", "ok": false, "at": "c1", "text": "温度高的物体内能一定大"}, {"t": "mark", "ok": true, "at": "c2", "text": "0 ℃ 冰 → 0 ℃ 水：平均动能{不变}"}, {"t": "mark", "ok": true, "at": "c3", "text": "吸热后分子势能增大，{内能增大}"}], "callout": {"label": "易错", "at": "c4", "text": "温度相同，{内能不一定相同}"}}} />;
