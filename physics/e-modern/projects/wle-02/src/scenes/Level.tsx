import React from 'react';
import {AutoScene} from '../components/auto';

export const Level: React.FC = () => <AutoScene k="level" d={{"tag": "考点八", "title": "能级", "blocks": [{"t": "rule", "tag": "能级", "at": "h1", "text": "原子的能量是{量子化}的", "c": "red"}, {"t": "big", "at": "h2", "text": "高能级 → 低能级：放出光子\nhν = {E_高 − E_低}", "size": 42}], "callout": {"label": "要点", "at": "h3", "text": "光子能量 = {两能级之差}"}, "beat": {"k": "poses", "at": "h2b", "text": "只能处在\n{分立的状态|red}"}}} />;
