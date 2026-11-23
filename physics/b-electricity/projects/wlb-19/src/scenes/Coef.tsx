import React from 'react';
import {AutoScene} from '../components/auto';

export const Coef: React.FC = () => <AutoScene k="coef" d={{"tag": "考点八", "title": "自感系数", "blocks": [{"t": "big", "at": "h1", "text": "E = {LΔI/Δt}", "size": 60}, {"t": "rule", "tag": "决定因素", "at": "h3", "text": "大小、形状、{匝数}、{有无铁芯}", "c": "red", "size": 32}, {"t": "rule", "tag": "单位", "at": "h4", "text": "亨利 {H}", "c": "orange", "size": 32}], "callout": {"label": "易错", "at": "h5", "text": "L 与电流{无关}"}}} />;
