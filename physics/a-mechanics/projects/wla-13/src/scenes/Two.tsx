import React from 'react';
import {AutoScene} from '../components/auto';

export const Two: React.FC = () => <AutoScene k="two" d={{"tag": "考点二", "title": "两类基本问题", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "第一类", "at": "b1", "lines": ["受力 → a → {运动}"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "第二类", "at": "b2", "lines": ["运动 → a → {受力}"], "c": "orange", "size": 34}]}]}, {"t": "text", "at": "b3", "text": "都用：{牛顿第二定律} + {运动学规律}", "size": 32}], "callout": {"label": "要点", "at": "b4", "text": "两类问题都要先求{加速度}"}}} />;
