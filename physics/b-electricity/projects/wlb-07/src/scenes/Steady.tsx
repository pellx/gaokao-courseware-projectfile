import React from 'react';
import {AutoScene} from '../components/auto';

export const Steady: React.FC = () => <AutoScene k="steady" d={{"tag": "考点二", "title": "恒定电场与恒定电流", "blocks": [{"t": "rule", "tag": "恒定电场", "at": "t2", "text": "电路中积累的电荷{分布稳定}", "c": "red", "size": 34}, {"t": "rule", "tag": "恒定电流", "at": "t3", "text": "大小、方向{都不随时间变化}", "c": "orange", "size": 34}], "callout": {"label": "要点", "at": "t4", "text": "电荷流动，{分布不变}"}}} />;
