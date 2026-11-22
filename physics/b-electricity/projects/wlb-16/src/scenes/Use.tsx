import React from 'react';
import {AutoScene} from '../components/auto';

export const Use: React.FC = () => <AutoScene k="use" d={{"tag": "考点二", "title": "质谱仪的用途", "blocks": [{"t": "rule", "tag": "位置", "at": "u1", "text": "底片上的位置反映粒子的{比荷}", "c": "red", "size": 34}, {"t": "rule", "tag": "质量", "at": "u2", "text": "q 相同时，m 越大，r 越大", "c": "orange", "size": 34}, {"t": "items", "items": [{"at": "u3", "text": "测定带电粒子的{质量}"}, {"at": "u3", "text": "分析{同位素}"}, {"at": "u3", "text": "最初由{阿斯顿}设计"}], "size": 34}], "callout": {"label": "要点", "at": "u4", "text": "质谱仪按{比荷}分离同位素"}, "beat": {"k": "hug", "at": "u3b", "text": "化学方法分不开\n质谱仪按比荷{分开|red}"}}} />;
