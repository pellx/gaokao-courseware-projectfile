import React from 'react';
import {AutoScene} from '../components/auto';

export const Error: React.FC = () => <AutoScene k="error" d={{"tag": "考点八", "title": "实验结论与误差", "blocks": [{"t": "big", "at": "e2", "text": "力的合成遵从{平行四边形定则}", "size": 48}, {"t": "panel", "title": "误差来源", "at": "e3", "lines": ["测力计读数", "记录力的方向", "作图"], "c": "orange", "size": 32}], "callout": {"label": "要点", "at": "e4", "text": "F 与 F′ 略有偏差是正常的，{误差范围内}一致即可"}, "beat": {"k": "band", "at": "e3b", "text": "F 与 F′\n{误差范围内一致|red}"}}} />;
