import React from 'react';
import {AutoScene} from '../components/auto';

export const Grat: React.FC = () => <AutoScene k="grat" d={{"tag": "考点四", "title": "衍射光栅", "blocks": [{"t": "rule", "tag": "结构", "at": "d1", "text": "许多{等宽、等间距}的狭缝", "c": "red"}, {"t": "big", "at": "d2", "text": "条纹{又窄又亮}", "size": 52}, {"t": "text", "at": "d3", "text": "用途：{分析光谱}", "size": 36}], "callout": {"label": "要点", "at": "d4", "text": "狭缝越多，条纹{越窄越亮}"}}} />;
