import React from 'react';
import {AutoScene} from '../components/auto';

export const Spectrum: React.FC = () => <AutoScene k="spectrum" d={{"tag": "考点一", "title": "光谱", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "线状谱", "at": "a2", "lines": ["一条条{分立的亮线}", "原子发射的光谱"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "连续谱", "at": "a2", "lines": ["连在一起的光带"], "c": "orange", "size": 32}]}]}, {"t": "items", "items": [{"at": "a3", "text": "每种原子都有自己的{特征谱线}"}, {"at": "a4", "text": "{光谱分析}：用特征谱线鉴别物质"}], "size": 32}], "callout": {"label": "要点", "at": "a5", "text": "原子光谱是{线状谱}"}, "beat": {"k": "star", "at": "a4b", "text": "一条条\n{分立的亮线|red}"}}} />;
