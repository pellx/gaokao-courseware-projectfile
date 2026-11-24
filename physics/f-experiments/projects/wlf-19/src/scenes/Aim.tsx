import React from 'react';
import {AutoScene} from '../components/auto';

export const Aim: React.FC = () => <AutoScene k="aim" d={{"tag": "考点一", "title": "实验目的", "blocks": [{"t": "rule", "tag": "目的", "at": "a1", "text": "测量玻璃的{折射率}", "c": "red"}, {"t": "rule", "tag": "现象", "at": "a2", "text": "光斜射入玻璃，{传播方向改变}", "c": "orange"}, {"t": "rule", "tag": "意义", "at": "a3", "text": "加深对{折射定律}的理解", "c": "red"}], "callout": {"label": "要点", "at": "a4", "text": "用两面{平行}的玻璃砖"}}} />;
