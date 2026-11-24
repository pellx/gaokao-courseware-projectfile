import React from 'react';
import {AutoScene} from '../components/auto';

export const Law: React.FC = () => <AutoScene k="law" d={{"tag": "考点九", "title": "实验结论", "blocks": [{"t": "big", "at": "l1", "text": "sinθ_1/sinθ_2 = {常数 n}", "size": 56}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "两面平行", "at": "l3", "lines": ["出射光线∥入射光线", "发生{侧移}"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "两面不平行", "at": "l4", "lines": ["出射光线{不平行}", "仍能测出 n"], "c": "red", "size": 32}]}]}], "callout": {"label": "要点", "at": "l4", "text": "两面不平行也能{测出折射率}"}}} />;
