import React from 'react';
import {AutoScene} from '../components/auto';

export const Free: React.FC = () => <AutoScene k="free" d={{"tag": "考点二", "title": "自由落体运动", "blocks": [{"t": "rule", "tag": "定义", "at": "f1", "text": "{只受重力}，从{静止}开始下落", "c": "red", "size": 36}, {"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": true, "at": "f2", "text": "v_0 = 0"}]}, {"blocks": [{"t": "mark", "ok": true, "at": "f2", "text": "只受重力"}]}]}, {"t": "text", "at": "f3", "text": "空气阻力可忽略 → {近似}看作自由落体", "size": 32}], "callout": {"label": "易错", "at": "f4", "text": "从静止下落{不一定}是自由落体"}, "beat": {"k": "snow", "at": "f3b", "text": "雪花慢慢飘落\n阻力{不能忽略|red} → 不是自由落体"}}} />;
