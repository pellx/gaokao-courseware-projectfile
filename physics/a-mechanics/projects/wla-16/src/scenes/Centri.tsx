import React from 'react';
import {AutoScene} from '../components/auto';

export const Centri: React.FC = () => <AutoScene k="centri" d={{"tag": "考点七", "title": "向心加速度", "blocks": [{"t": "rule", "tag": "方向", "at": "g1", "text": "始终{指向圆心}", "c": "red"}, {"t": "rule", "tag": "作用", "at": "g2", "text": "只改变速度{方向}，不改变大小", "c": "orange"}, {"t": "text", "at": "g3", "text": "方向时刻改变 → 变加速运动", "size": 32}], "callout": {"label": "要点", "at": "g4", "text": "描述速度{方向}变化的快慢"}, "beat": {"k": "carousel", "at": "g2b", "text": "向心加速度\n总是{朝着圆心|red}"}}} />;
