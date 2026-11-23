import React from 'react';
import {AutoScene} from '../components/auto';

export const Lines: React.FC = () => <AutoScene k="lines" d={{"tag": "考点三", "title": "磁感线", "blocks": [{"t": "rule", "tag": "方向", "at": "c2", "text": "{切线方向} = 小磁针 N 极受力方向", "c": "red", "size": 32}, {"t": "rule", "tag": "强弱", "at": "c3", "text": "{疏密}表示强弱", "c": "orange", "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "磁体外部", "at": "c4", "lines": ["N → {S}"], "c": "orange", "size": 34}]}, {"blocks": [{"t": "panel", "title": "磁体内部", "at": "c4", "lines": ["S → {N}"], "c": "red", "size": 34}]}]}], "callout": {"label": "易错", "at": "c5", "text": "磁感线{闭合}，电场线不闭合"}}} />;
