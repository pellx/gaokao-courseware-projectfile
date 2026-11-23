import React from 'react';
import {AutoScene} from '../components/auto';

export const Gap: React.FC = () => <AutoScene k="gap" d={{"tag": "考点四", "title": "条纹间距", "blocks": [{"t": "big", "at": "d1", "text": "Δx = {lλ/d}", "size": 68}, {"t": "items", "items": [{"at": "d2", "text": "l：双缝到屏的距离"}, {"at": "d2", "text": "d：{双缝间距}"}, {"at": "d3", "text": "l↑、λ↑、d↓ → Δx {变大}"}], "size": 34}], "callout": {"label": "要点", "at": "d4", "text": "由 Δx 可测{波长}"}, "beat": {"k": "piano", "at": "d3b", "text": "明暗相间\n{等间距|red}排列"}}} />;
