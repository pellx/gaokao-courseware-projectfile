import React from 'react';
import {AutoScene} from '../components/auto';

export const Atom: React.FC = () => <AutoScene k="atom" d={{"tag": "考点二", "title": "原子经济性", "blocks": [{"t": "big", "at": "at2", "text": "原子利用率 = {期望产物质量 ÷ 生成物总质量} × 100%", "size": 36}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "100%", "at": "at3", "text": "{化合、加成、加聚}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "达不到", "at": "at3", "text": "取代、消去、缩聚", "c": "orange", "size": 32}]}]}], "callout": {"label": "考法", "at": "at4", "text": "乙烯 + O2 → 环氧乙烷：{100%}"}}} />;
