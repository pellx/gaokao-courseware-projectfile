import React from 'react';
import {AutoScene} from '../components/auto';

export const Law: React.FC = () => <AutoScene k="law" d={{"tag": "考点二", "title": "法拉第电磁感应定律", "blocks": [{"t": "big", "at": "b2", "text": "E = {nΔΦ/Δt}", "size": 64}, {"t": "rule", "tag": "单位", "at": "b3", "text": "伏特 {V}", "c": "orange", "size": 32}], "callout": {"label": "要点", "at": "b4", "text": "E 与{磁通量的变化率}成正比"}}} />;
