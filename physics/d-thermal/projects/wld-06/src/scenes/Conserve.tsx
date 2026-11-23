import React from 'react';
import {AutoScene} from '../components/auto';

export const Conserve: React.FC = () => <AutoScene k="conserve" d={{"tag": "考点七", "title": "能量守恒定律", "blocks": [{"t": "big", "at": "c1", "text": "能量不会凭空产生，也不会{凭空消失}", "size": 44}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "转化", "at": "c2", "text": "一种形式 → {其他形式}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "转移", "at": "c2", "text": "一个物体 → {别的物体|orange}", "c": "orange", "size": 32}]}]}, {"t": "big", "at": "c3", "text": "能量{总量不变}", "size": 50}], "callout": {"label": "要点", "at": "c4", "text": "机械能守恒、热力学第一定律是它的{特例}"}}} />;
