import React from 'react';
import {AutoScene} from '../components/auto';

export const Dir: React.FC = () => <AutoScene k="dir" d={{"tag": "考点八", "title": "速度与位移的方向", "blocks": [{"t": "rule", "tag": "加速度", "at": "r1", "text": "总与位移{反向}", "c": "red", "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "远离平衡位置", "at": "r2", "lines": ["速度与位移{同向}", "减速"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "靠近平衡位置", "at": "r3", "lines": ["速度与位移{反向}", "加速"], "c": "red", "size": 32}]}]}], "callout": {"label": "易错", "at": "r4", "text": "速度方向看{远离还是靠近}"}}} />;
