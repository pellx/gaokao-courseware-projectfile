import React from 'react';
import {AutoScene} from '../components/auto';

export const Principle: React.FC = () => <AutoScene k="principle" d={{"tag": "考点二", "title": "实验原理", "blocks": [{"t": "chain", "steps": [{"at": "p1", "text": "入射光线"}, {"at": "p1", "text": "出射光线", "c": "orange"}, {"at": "p1", "text": "玻璃内的{折射光线}"}], "arrows": []}, {"t": "rule", "tag": "测量", "at": "p2", "text": "入射角 {θ_1}、折射角 {θ_2}", "c": "orange"}, {"t": "big", "at": "p3", "text": "{n = sinθ_1/sinθ_2}", "size": 60}], "callout": {"label": "要点", "at": "p4", "text": "角度都从{法线}量起"}}} />;
