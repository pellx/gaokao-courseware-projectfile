import React from 'react';
import {AutoScene} from '../components/auto';

export const Refine: React.FC = () => <AutoScene k="refine" d={{"tag": "考点三", "title": "电解精炼铜", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "阳极：粗铜", "at": "rf2", "lines": ["Zn、Fe、Ni 先失电子", "再 Cu − 2e^- = Cu^2+", "Ag、Au → {阳极泥}"], "c": "red", "size": 31}]}, {"blocks": [{"t": "panel", "title": "阴极：纯铜", "at": "rf3", "lines": ["Cu^2+ + 2e^- = Cu"], "c": "orange", "size": 31}]}]}, {"t": "big", "at": "rf3", "text": "c(Cu^2+) {略有减小}", "size": 42}], "callout": {"label": "易错", "at": "rf4", "text": "精炼：阳极减少 {≠} 阴极增加；电镀：相等"}}} />;
