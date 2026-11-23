import React from 'react';
import {AutoScene} from '../components/auto';

export const Thomson: React.FC = () => <AutoScene k="thomson" d={{"tag": "考点四", "title": "汤姆孙的原子模型", "blocks": [{"t": "rule", "tag": "枣糕模型", "at": "d2", "text": "正电荷{均匀分布}在整个原子球体内", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "正电荷", "at": "d2", "lines": ["均匀分布，像{蛋糕}"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "电子", "at": "d3", "lines": ["{镶嵌}其中，像枣子"], "c": "orange", "size": 34}]}]}], "callout": {"label": "要点", "at": "d4", "text": "正电荷{均匀分布}在原子内"}, "beat": {"k": "cake", "at": "d3b", "text": "电子像\n{镶嵌的草莓|red}"}}} />;
