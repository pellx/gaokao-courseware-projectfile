import React from 'react';
import {AutoScene} from '../components/auto';

export const Energy: React.FC = () => <AutoScene k="energy" d={{"tag": "考点六", "title": "能量的转化", "blocks": [{"t": "chain", "steps": [{"at": "e1", "text": "势能"}, {"at": "e1", "text": "{动能}"}, {"at": "e1", "text": "势能"}], "arrows": ["靠近平衡位置", "远离平衡位置"]}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "平衡位置", "at": "e3", "lines": ["动能{最大}", "势能最小"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "最大位移处", "at": "e3", "lines": ["势能{最大}", "动能为 0"], "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "e4", "text": "平衡位置{动能最大}"}, "beat": {"k": "swing", "at": "e3b", "text": "最低点：{动能最大|red}\n最高点：{势能最大|red}"}}} />;
