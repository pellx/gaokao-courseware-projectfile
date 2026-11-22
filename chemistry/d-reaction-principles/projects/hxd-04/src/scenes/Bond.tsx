import React from 'react';
import {AutoScene} from '../components/auto';

export const Bond: React.FC = () => <AutoScene k="bond" d={{"tag": "考点六", "title": "机理图中的断键与成键", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "非极性键", "at": "bo2", "lines": ["H—H、O=O、N≡N", "C—C、C=C"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "极性键", "at": "bo2", "lines": ["C—H、O—H、N—H", "C=O、C—O"], "c": "red", "size": 32}]}]}, {"t": "rule", "tag": "化合价", "at": "bo3", "text": "金属催化剂价态{先升后降}：发生了氧化还原", "c": "red", "size": 31}], "callout": {"label": "解题方法", "at": "bo4", "text": "逐步对比前后结构，{写出断了什么、连上什么}"}}} />;
