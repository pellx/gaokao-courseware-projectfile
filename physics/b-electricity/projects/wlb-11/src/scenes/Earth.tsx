import React from 'react';
import {AutoScene} from '../components/auto';

export const Earth: React.FC = () => <AutoScene k="earth" d={{"tag": "考点五", "title": "分子电流假说与地磁场", "blocks": [{"t": "rule", "tag": "假说", "at": "e1", "text": "分子电流 → 微粒成为{小磁体}", "c": "red", "size": 32}, {"t": "rule", "tag": "本质", "at": "e2", "text": "磁场都来源于{电荷的运动}", "c": "orange", "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "地理北极附近", "at": "e3", "lines": ["{地磁南极}"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "地理南极附近", "at": "e3", "lines": ["地磁北极"], "c": "orange", "size": 34}]}]}], "callout": {"label": "易错", "at": "e5", "text": "地理北极附近是{地磁南极}"}}} />;
