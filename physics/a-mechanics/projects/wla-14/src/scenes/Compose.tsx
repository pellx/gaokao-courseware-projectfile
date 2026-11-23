import React from 'react';
import {AutoScene} from '../components/auto';

export const Compose: React.FC = () => <AutoScene k="compose" d={{"tag": "考点六", "title": "运动的合成与分解", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "合成", "at": "f1", "lines": ["分运动 → 合运动"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "分解", "at": "f1", "lines": ["合运动 → 分运动"], "c": "orange", "size": 34}]}]}, {"t": "big", "at": "f2", "text": "x、v、a：遵从{平行四边形定则}", "size": 42}], "callout": {"label": "要点", "at": "f4", "text": "本质是{矢量}的合成与分解"}, "beat": {"k": "poses", "at": "f2b", "text": "合运动与分运动\n描述{同一个物体|red}"}}} />;
