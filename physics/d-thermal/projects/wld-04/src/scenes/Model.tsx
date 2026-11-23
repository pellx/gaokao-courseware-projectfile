import React from 'react';
import {AutoScene} from '../components/auto';

export const Model: React.FC = () => <AutoScene k="model" d={{"tag": "考点五", "title": "理想气体的微观模型", "blocks": [{"t": "items", "items": [{"at": "m1", "text": "分子大小可忽略，看成{质点}"}, {"at": "m2", "text": "除碰撞外{无相互作用}"}, {"at": "m2", "text": "{没有分子势能}"}], "size": 36}, {"t": "big", "at": "m3", "text": "内能只与{温度}有关", "size": 48}], "callout": {"label": "要点", "at": "m4", "text": "温度升高 → 理想气体内能{一定增大}"}}} />;
