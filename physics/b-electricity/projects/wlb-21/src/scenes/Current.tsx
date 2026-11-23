import React from 'react';
import {AutoScene} from '../components/auto';

export const Current: React.FC = () => <AutoScene k="current" d={{"tag": "考点四", "title": "电流与匝数关系", "blocks": [{"t": "big", "at": "d2", "text": "I_1/I_2 = {n_2/n_1}", "size": 56}, {"t": "text", "at": "d1", "text": "由 P_入 = P_出：U_1I_1 = U_2I_2", "size": 36}, {"t": "rule", "tag": "导线", "at": "d3", "text": "匝数多 → 电流{小} → 导线细", "c": "orange"}], "callout": {"label": "易错", "at": "d4", "text": "只适用于{一个副线圈}"}}} />;
