import React from 'react';
import {AutoScene} from '../components/auto';

export const Force: React.FC = () => <AutoScene k="force" d={{"tag": "考点二", "title": "单摆的回复力", "blocks": [{"t": "rule", "tag": "受力", "at": "f1", "text": "{重力} + 摆线拉力", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "切线方向", "at": "f3", "lines": ["F = −mg sinθ", "提供{回复力}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "摆线方向", "at": "f4", "lines": ["拉力与重力分力的合力", "提供{向心力}"], "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "f5", "text": "回复力是重力的{切向分力}"}}} />;
