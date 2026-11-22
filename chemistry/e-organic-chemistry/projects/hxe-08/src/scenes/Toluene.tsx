import React from 'react';
import {AutoScene} from '../components/auto';

export const Toluene: React.FC = () => <AutoScene k="toluene" d={{"tag": "考点六", "title": "甲苯的取代位置", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "光照 + Cl2", "at": "to1", "text": "取代{侧链}：C6H5CH2Cl", "c": "red", "size": 31}]}, {"blocks": [{"t": "rule", "tag": "FeBr3 + Br2", "at": "to2", "text": "取代{苯环}：邻、对位", "c": "orange", "size": 31}]}]}, {"t": "text", "at": "to3", "text": "甲苯硝化 → {2,4,6-三硝基甲苯}（TNT）", "size": 33, "center": true}], "callout": {"label": "解题方法", "at": "to4", "text": "{光照取代侧链，催化取代苯环}"}}} />;
