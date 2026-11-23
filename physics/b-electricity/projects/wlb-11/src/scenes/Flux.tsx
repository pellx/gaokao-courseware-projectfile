import React from 'react';
import {AutoScene} from '../components/auto';

export const Flux: React.FC = () => <AutoScene k="flux" d={{"tag": "考点八", "title": "磁通量", "blocks": [{"t": "big", "at": "h1", "text": "Φ = {BS}", "size": 62}, {"t": "rule", "tag": "不垂直", "at": "h2", "text": "S 取{垂直于磁场的投影面积}", "c": "orange", "size": 32}, {"t": "rule", "tag": "单位", "at": "h3", "text": "标量，{1 Wb = 1 T·m^2}", "c": "red", "size": 32}, {"t": "rule", "tag": "磁通密度", "at": "h4", "text": "B = {Φ/S}", "c": "orange", "size": 32}], "callout": {"label": "易错", "at": "h5", "text": "平面与磁场平行：{Φ = 0}"}}} />;
