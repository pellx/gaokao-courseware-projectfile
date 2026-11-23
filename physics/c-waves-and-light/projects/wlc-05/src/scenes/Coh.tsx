import React from 'react';
import {AutoScene} from '../components/auto';

export const Coh: React.FC = () => <AutoScene k="coh" d={{"tag": "考点二", "title": "相干光源", "blocks": [{"t": "panel", "title": "相干条件", "at": "b1", "lines": ["{频率相同}", "相位差恒定", "振动方向相同"], "c": "red", "size": 36}, {"t": "rule", "tag": "获得", "at": "b3", "text": "{同一束光}通过双缝 → 两个相干光源", "c": "orange"}], "callout": {"label": "易错", "at": "b4", "text": "两个独立光源{不相干}"}}} />;
