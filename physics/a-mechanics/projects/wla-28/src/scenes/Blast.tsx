import React from 'react';
import {AutoScene} from '../components/auto';

export const Blast: React.FC = () => <AutoScene k="blast" d={{"tag": "考点四", "title": "爆炸", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "动量", "at": "b1", "lines": ["内力 {≫} 外力", "{近似守恒}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "能量", "at": "b2", "lines": ["化学能 → 动能", "总动能{增加}"], "c": "orange", "size": 32}]}]}, {"t": "text", "at": "b3", "text": "与反冲本质相同：内力使系统分成几部分", "size": 30}], "callout": {"label": "要点", "at": "b4", "text": "动量守恒，动能{增加}"}}} />;
