import React from 'react';
import {AutoScene} from '../components/auto';

export const Relative: React.FC = () => <AutoScene k="relative" d={{"tag": "考点四", "title": "重力势能的相对性", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "数值", "at": "d1", "text": "与参考平面{有关}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "变化量", "at": "d3", "text": "与参考平面{无关}", "c": "orange", "size": 32}]}]}, {"t": "text", "at": "d2", "text": "参考平面下方：E_p {< 0}", "size": 34}], "callout": {"label": "易错", "at": "d4", "text": "负号表示{低于}参考平面"}, "beat": {"k": "tree", "at": "d3b", "text": "数值看参考平面\n差值{不变|red}"}}} />;
