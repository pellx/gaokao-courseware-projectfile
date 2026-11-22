import React from 'react';
import {AutoScene} from '../components/auto';

export const Ortho: React.FC = () => <AutoScene k="ortho" d={{"tag": "考点七", "title": "正交分解", "blocks": [{"t": "rule", "tag": "正交分解", "at": "g1", "text": "沿两个{相互垂直}的方向分解", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "g2", "text": "F_x = {F cosθ}", "size": 46}]}, {"blocks": [{"t": "big", "at": "g2", "text": "F_y = {F sinθ|orange}", "size": 46, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "chain", "steps": [{"at": "g3", "text": "各力正交分解"}, {"at": "g3", "text": "求 F_x合、F_y合"}, {"at": "g3", "text": "再合成"}], "arrows": []}], "callout": {"label": "要点", "at": "g4", "text": "坐标轴可任意选，让尽量多的力{在轴上}"}}} />;
