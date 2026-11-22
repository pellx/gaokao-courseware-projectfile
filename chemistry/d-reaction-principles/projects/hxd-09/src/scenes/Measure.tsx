import React from 'react';
import {AutoScene} from '../components/auto';

export const Measure: React.FC = () => <AutoScene k="measure" d={{"tag": "考点七", "title": "pH 的测定", "blocks": [{"t": "items", "items": [{"at": "me1", "text": "洁净干燥的玻璃棒蘸取，点在试纸{中部}，对比比色卡"}, {"at": "me2", "text": "{不能润湿}：酸偏大、碱偏小、中性不变"}, {"at": "me3", "text": "pH 计读到 0.01；氯水、NaClO 溶液{不能用试纸}"}], "size": 33}], "callout": {"label": "易错", "at": "me4", "text": "广泛 pH 试纸只能读{整数}"}}} />;
