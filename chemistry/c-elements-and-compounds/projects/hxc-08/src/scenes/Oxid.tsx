import React from 'react';
import {AutoScene} from '../components/auto';

export const Oxid: React.FC = () => <AutoScene k="oxid" d={{"tag": "考点四", "title": "SO2 的氧化性", "blocks": [{"t": "big", "at": "ox2", "text": "SO2 + 2H2S = 3S↓ + 2H2O", "size": 48}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "现象", "at": "ox2", "text": "{淡黄色}沉淀", "c": "orange", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "类型", "at": "ox2", "text": "{归中}：+4 → 0 ← −2", "c": "red", "size": 32}]}]}, {"t": "rule", "tag": "产物比", "at": "ox3", "text": "氧化产物 : 还原产物 = {2 : 1}", "c": "green", "size": 32}], "callout": {"label": "易错", "at": "ox4", "text": "SO2 以还原性为主；遇 {H2S} 才表现氧化性"}}} />;
