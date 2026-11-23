import React from 'react';
import {AutoScene} from '../components/auto';

export const Data: React.FC = () => <AutoScene k="data" d={{"tag": "考点六", "title": "数据处理", "blocks": [{"t": "big", "at": "t1", "text": "I-t 图线下的面积 = {电荷量 Q}", "size": 44}, {"t": "items", "items": [{"at": "t2", "text": "数方格：大于半格算{一格}，小于半格{舍去}"}, {"at": "t3", "text": "Q = 格数 × 每格电荷量"}], "size": 32}, {"t": "big", "at": "t3", "text": "{C = Q / U}", "size": 52}], "callout": {"label": "要点", "at": "t4", "text": "每格电荷量 = {一格电流 × 一格时间}"}}} />;
