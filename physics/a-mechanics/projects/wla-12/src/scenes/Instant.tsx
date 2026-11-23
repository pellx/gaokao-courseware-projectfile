import React from 'react';
import {AutoScene} from '../components/auto';

export const Instant: React.FC = () => <AutoScene k="instant" d={{"tag": "考点四", "title": "瞬时性", "blocks": [{"t": "chain", "steps": [{"at": "d1", "text": "同时产生"}, {"at": "d1", "text": "同时变化"}, {"at": "d1", "text": "同时消失"}], "arrows": []}, {"t": "text", "at": "d2", "text": "合力消失 → a 立即为 0 → 匀速直线运动", "size": 32}, {"t": "text", "at": "d3", "text": "速度改变需要{一段时间}", "size": 32}], "callout": {"label": "要点", "at": "d4", "text": "a 可以{突变}，v 不能突变"}, "beat": {"k": "cart", "at": "d2b", "text": "推力消失\n加速度{同时消失|red}"}}} />;
