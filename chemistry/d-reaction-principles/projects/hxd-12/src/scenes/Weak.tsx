import React from 'react';
import {AutoScene} from '../components/auto';

export const Weak: React.FC = () => <AutoScene k="weak" d={{"tag": "考点一", "title": "两个“微弱”", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "电离微弱", "at": "wk1", "text": "CH3COOH 溶液：c(CH3COOH) {远大于} c(CH3COO^-)", "c": "red", "size": 30}]}, {"blocks": [{"t": "rule", "tag": "水解微弱", "at": "wk2", "text": "CH3COONa 溶液：c(CH3COO^-) {远大于} c(CH3COOH)", "c": "orange", "size": 30}]}]}, {"t": "big", "at": "wk3", "text": "分步进行：{第一步远大于第二步}", "size": 42}], "callout": {"label": "解题方法", "at": "wk4", "text": "先排{大量离子}，再排少量粒子"}}} />;
