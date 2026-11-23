import React from 'react';
import {AutoScene} from '../components/auto';

export const Diff: React.FC = () => <AutoScene k="diff" d={{"tag": "考点一", "title": "光的衍射", "blocks": [{"t": "rule", "tag": "衍射", "at": "a1", "text": "{绕过}缝或孔的边缘传播", "c": "red"}, {"t": "big", "at": "a2", "text": "尺寸 ≈ λ 或 {< λ}：衍射明显", "size": 46}, {"t": "text", "at": "a3", "text": "可见光波长只有几百纳米", "size": 32}], "callout": {"label": "要点", "at": "a4", "text": "尺寸{接近或小于波长}"}}} />;
