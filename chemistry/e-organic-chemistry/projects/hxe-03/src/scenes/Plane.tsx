import React from 'react';
import {AutoScene} from '../components/auto';

export const Plane: React.FC = () => <AutoScene k="plane" d={{"tag": "考点五", "title": "共面判断", "blocks": [{"t": "rule", "tag": "单键", "at": "pl1", "text": "可以{旋转}：两个平面“可能”共面", "c": "red", "size": 32}, {"t": "items", "items": [{"at": "pl2", "text": "苯乙烯：所有原子{可能}共面（最多 16 个）"}, {"at": "pl3", "text": "甲苯：最多 {13} 个原子共面"}], "size": 33}], "callout": {"label": "易错", "at": "pl4", "text": "分清“{一定}共面”与“{可能}共面”"}}} />;
