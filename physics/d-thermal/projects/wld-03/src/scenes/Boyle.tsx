import React from 'react';
import {AutoScene} from '../components/auto';

export const Boyle: React.FC = () => <AutoScene k="boyle" d={{"tag": "考点六", "title": "玻意耳定律", "blocks": [{"t": "big", "at": "b2", "text": "{pV = C}　　p_1V_1 = p_2V_2", "size": 56}, {"t": "rule", "tag": "条件", "at": "b1", "text": "一定质量、{温度不变}", "c": "red"}, {"t": "text", "at": "b3", "text": "温度不变的过程：{等温变化|orange}", "size": 34}], "callout": {"label": "要点", "at": "b4", "text": "一定质量、温度不变；C 与种类、质量、温度有关"}}} />;
