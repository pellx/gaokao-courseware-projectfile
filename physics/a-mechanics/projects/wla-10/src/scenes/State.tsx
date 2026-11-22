import React from 'react';
import {AutoScene} from '../components/auto';

export const State: React.FC = () => <AutoScene k="state" d={{"tag": "考点一", "title": "平衡状态", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "a1", "text": "静止", "size": 52}]}, {"blocks": [{"t": "big", "at": "a1", "text": "匀速直线运动", "size": 52, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "big", "at": "a2", "text": "a = {0}", "size": 56}, {"t": "text", "at": "a3", "text": "例：桌上静止的书；匀速上升的电梯里的人", "size": 30}], "callout": {"label": "要点", "at": "a4", "text": "平衡状态：{a = 0}"}, "beat": {"k": "nap", "at": "a3b", "text": "窝着不动\n{静止 = 平衡|red}"}}} />;
