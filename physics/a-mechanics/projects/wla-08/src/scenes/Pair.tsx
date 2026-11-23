import React from 'react';
import {AutoScene} from '../components/auto';

export const Pair: React.FC = () => <AutoScene k="pair" d={{"tag": "考点一", "title": "作用力和反作用力", "blocks": [{"t": "rule", "tag": "相互作用", "at": "a1", "text": "力的作用是{相互}的", "c": "red", "size": 36}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "作用力", "at": "a2", "lines": ["甲对乙的力"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "反作用力", "at": "a2", "lines": ["乙对甲的力"], "c": "orange", "size": 32}]}]}, {"t": "text", "at": "a4", "text": "手推墙，{墙也推手}；脚向后蹬地，{地面向前推脚}", "size": 30}], "callout": {"label": "要点", "at": "a5", "text": "总是{成对出现}"}}} />;
