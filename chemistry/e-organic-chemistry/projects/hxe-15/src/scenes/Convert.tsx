import React from 'react';
import {AutoScene} from '../components/auto';

export const Convert: React.FC = () => <AutoScene k="convert" d={{"tag": "考点四", "title": "官能团的转化", "blocks": [{"t": "chain", "steps": [{"at": "cv1", "text": "卤代烃"}, {"at": "cv1", "text": "醇"}, {"at": "cv1", "text": "醛"}, {"at": "cv1", "text": "羧酸"}, {"at": "cv1", "text": "{酯}"}], "arrows": ["水解", "氧化", "氧化", "酯化"], "center": true, "size": 32}, {"t": "text", "at": "cv3", "text": "CH3CH2CH2Br → CH3CH=CH2 → CH3CHBrCH2Br → {CH3CH(OH)CH2OH}", "size": 31, "center": true}], "callout": {"label": "解题方法", "at": "cv4", "text": "一元变二元：{消去 → 加成 → 水解}"}}} />;
