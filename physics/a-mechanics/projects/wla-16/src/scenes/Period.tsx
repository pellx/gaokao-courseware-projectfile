import React from 'react';
import {AutoScene} from '../components/auto';

export const Period: React.FC = () => <AutoScene k="period" d={{"tag": "考点四", "title": "周期与转速", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "周期 T", "at": "d1", "lines": ["转一周所用时间", "单位 {s}"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "转速 n", "at": "d2", "lines": ["单位时间转过的圈数", "{r/s} 或 r/min"], "c": "orange", "size": 34}]}]}, {"t": "text", "at": "d3", "text": "T 越小、n 越大 → 转得越快", "size": 32}], "callout": {"label": "易错", "at": "d4", "text": "r/min → r/s：{除以 60}"}}} />;
