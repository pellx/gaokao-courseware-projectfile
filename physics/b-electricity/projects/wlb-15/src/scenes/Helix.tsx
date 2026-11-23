import React from 'react';
import {AutoScene} from '../components/auto';

export const Helix: React.FC = () => <AutoScene k="helix" d={{"tag": "考点七", "title": "速度与磁场斜交", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "平行分量 v_(∥)", "at": "g2", "lines": ["不受力", "{匀速直线运动}"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "垂直分量 v_(⊥)", "at": "g3", "lines": ["F = qv_(⊥)B", "{匀速圆周运动}"], "c": "red", "size": 32}]}]}, {"t": "big", "at": "g4", "text": "合运动：{螺旋线}", "size": 48}], "callout": {"label": "要点", "at": "g4", "text": "轨迹是{螺旋线}"}, "beat": {"k": "drill", "at": "g3b", "text": "一边绕圈一边前进\n{螺旋线|red}"}}} />;
