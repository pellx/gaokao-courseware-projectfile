import React from 'react';
import {AutoScene} from '../components/auto';

export const Judge: React.FC = () => <AutoScene k="judge" d={{"tag": "考点八", "title": "直线还是曲线", "blocks": [{"t": "rule", "tag": "判断", "at": "h1", "text": "合初速度与合加速度{是否共线}", "c": "red"}, {"t": "items", "items": [{"at": "h2", "text": "匀速 + 匀速 → {匀速直线}"}, {"at": "h3", "text": "匀速 + 匀变速（不共线）→ {匀变速曲线}"}], "size": 32}], "callout": {"label": "易错", "at": "h4", "text": "变速运动{不一定}是曲线运动"}, "beat": {"k": "a3", "at": "h3b", "text": "竖直上抛\n变速但是{直线|red}"}}} />;
