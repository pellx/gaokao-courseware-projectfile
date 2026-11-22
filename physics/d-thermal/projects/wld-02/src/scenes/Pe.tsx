import React from 'react';
import {AutoScene} from '../components/auto';

export const Pe: React.FC = () => <AutoScene k="pe" d={{"tag": "考点六", "title": "分子势能", "blocks": [{"t": "rule", "tag": "分子势能", "at": "e1", "text": "由分子间{相对位置}决定", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "正功", "at": "e2", "text": "分子势能{减小}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "负功", "at": "e2", "text": "分子势能{增大|orange}", "c": "orange", "size": 32}]}]}, {"t": "big", "at": "e3", "text": "r = r_0 时，分子势能{最小}", "size": 44}], "callout": {"label": "要点", "at": "e4", "text": "最小≠零，零点人为选取"}}} />;
