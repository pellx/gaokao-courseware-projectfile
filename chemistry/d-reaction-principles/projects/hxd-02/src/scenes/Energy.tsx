import React from 'react';
import {AutoScene} from '../components/auto';

export const Energy: React.FC = () => <AutoScene k="energy" d={{"tag": "考点七", "title": "能源", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "化石燃料（不可再生）", "at": "en1", "lines": ["煤、石油、天然气"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "新能源", "at": "en1", "lines": ["太阳能、氢能、风能", "地热能、海洋能、生物质能"], "c": "green", "size": 32}]}]}, {"t": "items", "items": [{"at": "en2", "text": "充分燃烧：{足够空气}、增大接触面积（煤粉碎、液化、气化）"}, {"at": "en3", "text": "氢能：热值高，{产物是水|green}"}], "size": 32}], "callout": {"label": "考法", "at": "en4", "text": "第一题 STSE：判断{新能源}与能量转化"}}} />;
