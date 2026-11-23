import React from 'react';
import {AutoScene} from '../components/auto';

export const Descartes: React.FC = () => <AutoScene k="descartes" d={{"tag": "考点三", "title": "笛卡儿的补充", "blocks": [{"t": "rule", "tag": "笛卡儿", "at": "c2", "text": "不受力：以{同一速度}沿{同一直线}运动", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "伽利略", "at": "c3", "lines": ["不会停下来"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "笛卡儿", "at": "c3", "lines": ["也{不偏离方向}"], "c": "red", "size": 32}]}]}], "callout": {"label": "要点", "at": "c4", "text": "不受力：速度{大小、方向}都不变"}}} />;
