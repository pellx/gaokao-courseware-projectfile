import React from 'react';
import {AutoScene} from '../components/auto';

export const Ac: React.FC = () => <AutoScene k="ac" d={{"tag": "考点一", "title": "交变电流", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "交流", "at": "a1", "lines": ["大小、方向", "{周期性变化}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "直流", "at": "a2", "lines": ["方向{不变}"], "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "a4", "text": "方向不变就是{直流}"}, "beat": {"k": "seesaw", "at": "a2b", "text": "一上一下来回交替\n方向{周期性改变|red}"}}} />;
