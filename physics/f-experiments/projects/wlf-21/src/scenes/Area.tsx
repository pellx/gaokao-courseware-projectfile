import React from 'react';
import {AutoScene} from '../components/auto';

export const Area: React.FC = () => <AutoScene k="area" d={{"tag": "考点六", "title": "测油膜的面积", "blocks": [{"t": "items", "items": [{"at": "a1", "text": "水面上{均匀}撒一层爽身粉，滴入一滴溶液"}, {"at": "a2", "text": "油膜形状{稳定}后，描下轮廓"}, {"at": "a3", "text": "数方格：不足半格{舍去}，多于半格{算一格}"}, {"at": "a3", "text": "S = 格数 × {每格面积}"}], "size": 34}], "callout": {"label": "要点", "at": "a4", "text": "不足半格{舍去}，多于半格{算一格}"}}} />;
