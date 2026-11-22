import React from 'react';
import {AutoScene} from '../components/auto';

export const Rand: React.FC = () => <AutoScene k="rand" d={{"tag": "考点三", "title": "偶然误差", "blocks": [{"t": "rule", "tag": "来源", "at": "c1", "text": "各种{偶然因素}", "c": "red"}, {"t": "rule", "tag": "特点", "at": "c2", "text": "时而{偏大}、时而{偏小}，机会接近", "c": "orange"}, {"t": "big", "at": "c3", "text": "多次测量 → 偏大偏小{相互抵消}", "size": 42}], "callout": {"label": "要点", "at": "c4", "text": "{多次测量取平均值}减小偶然误差"}, "beat": {"k": "drum", "at": "c3b", "text": "多敲几次取平均\n{偶然误差|red}变小"}}} />;
