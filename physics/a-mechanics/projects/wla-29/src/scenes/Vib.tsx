import React from 'react';
import {AutoScene} from '../components/auto';

export const Vib: React.FC = () => <AutoScene k="vib" d={{"tag": "考点一", "title": "机械振动", "blocks": [{"t": "rule", "tag": "机械振动", "at": "v1", "text": "在{平衡位置}附近的{往复运动}", "c": "red"}, {"t": "rule", "tag": "平衡位置", "at": "v2", "text": "物体原来{静止}时的位置", "c": "orange"}, {"t": "text", "at": "v3", "text": "钟摆、琴弦、心脏的跳动", "size": 32}], "callout": {"label": "要点", "at": "v4", "text": "平衡位置 + {往复运动}"}, "beat": {"k": "step", "at": "v3b", "text": "县界线 = {平衡位置|red}\n两侧来回：{往复运动|red}"}}} />;
