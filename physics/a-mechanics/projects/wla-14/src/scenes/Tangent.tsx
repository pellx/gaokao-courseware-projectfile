import React from 'react';
import {AutoScene} from '../components/auto';

export const Tangent: React.FC = () => <AutoScene k="tangent" d={{"tag": "考点一", "title": "曲线运动的速度方向", "blocks": [{"t": "rule", "tag": "速度方向", "at": "a1", "text": "沿曲线该点的{切线方向}", "c": "red"}, {"t": "text", "at": "a2", "text": "例：砂轮火星、伞上甩出的水滴沿切线飞出", "size": 30}, {"t": "big", "at": "a3", "text": "曲线运动一定是{变速运动}", "size": 44}], "callout": {"label": "要点", "at": "a4", "text": "曲线运动一定有{加速度}，合力不为 0"}}} />;
