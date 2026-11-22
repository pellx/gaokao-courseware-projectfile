import React from 'react';
import {AutoScene} from '../components/auto';

export const Method: React.FC = () => <AutoScene k="method" d={{"tag": "考点七", "title": "溶液图像解题法", "blocks": [{"t": "chain", "steps": [{"at": "me1", "text": "{看坐标}"}, {"at": "me2", "text": "抓特殊点"}, {"at": "me3", "text": "定溶质"}, {"at": "me3", "text": "用 K 和守恒"}], "arrows": [], "center": true, "size": 36}, {"t": "items", "items": [{"at": "me2", "text": "特殊点：起点、{交点}、半中和点、中性点、{恰好反应点}、最高点"}, {"at": "me4", "text": "交点读 {K}；比较浓度先看酸碱性"}], "size": 32}], "callout": {"label": "解题方法", "at": "me4", "text": "{K 从特殊点读}，浓度比较先看酸碱性"}}} />;
