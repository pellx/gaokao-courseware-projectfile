import React from 'react';
import {AutoScene} from '../components/auto';

export const Balmer: React.FC = () => <AutoScene k="balmer" d={{"tag": "考点二", "title": "氢原子光谱的实验规律", "blocks": [{"t": "big", "at": "b2", "text": "1/λ = R_(∞)({1/2^2 − 1/n^2})", "size": 52}, {"t": "text", "at": "b2", "text": "n = 3，4，5，…", "size": 34}, {"t": "items", "items": [{"at": "b3", "text": "R_(∞)：{里德伯常量}；n 只能取{整数}"}, {"at": "b4", "text": "巴耳末系；紫外区、红外区还有其他线系"}], "size": 32}], "callout": {"label": "要点", "at": "b5", "text": "氢原子光谱是{分立的线状谱}"}}} />;
