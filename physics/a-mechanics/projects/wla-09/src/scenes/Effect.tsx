import React from 'react';
import {AutoScene} from '../components/auto';

export const Effect: React.FC = () => <AutoScene k="effect" d={{"tag": "考点六", "title": "按作用效果分解", "blocks": [{"t": "rule", "tag": "依据", "at": "f1", "text": "按力的{作用效果}确定分力方向", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "沿斜面", "at": "f2", "lines": ["使物体{下滑}", {"at": "f3", "text": "G_1 = {G sinθ}"}], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "垂直斜面", "at": "f2", "lines": ["使物体{压紧}斜面", {"at": "f3", "text": "G_2 = {G cosθ}"}], "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "f4", "text": "G cosθ 是重力的分力，{不是}物体对斜面的压力"}}} />;
