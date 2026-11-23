import React from 'react';
import {AutoScene} from '../components/auto';

export const Lenz: React.FC = () => <AutoScene k="lenz" d={{"tag": "考点六", "title": "楞次定律", "blocks": [{"t": "big", "at": "f2", "text": "感应电流的磁场 总要{阻碍}\n引起感应电流的{磁通量的变化}", "size": 40}, {"t": "chain", "steps": [{"at": "f3", "text": "原磁场方向、Φ 增或减", "c": "orange"}, {"at": "f3", "text": "感应电流的磁场方向", "c": "red"}, {"at": "f3", "text": "安培定则定电流方向", "c": "orange"}], "arrows": []}], "callout": {"label": "要点", "at": "f4", "text": "阻碍的是{磁通量的变化}"}}} />;
