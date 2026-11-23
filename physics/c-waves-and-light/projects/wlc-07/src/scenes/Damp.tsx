import React from 'react';
import {AutoScene} from '../components/auto';

export const Damp: React.FC = () => <AutoScene k="damp" d={{"tag": "考点七", "title": "阻尼振荡与无阻尼振荡", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "阻尼振荡", "at": "g1", "lines": ["电阻发热", "辐射电磁波", {"at": "g2", "text": "振幅{逐渐减小}"}], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "无阻尼振荡", "at": "g3", "lines": ["适时补充能量", "振幅{不变}"], "c": "orange", "size": 34}]}]}], "callout": {"label": "要点", "at": "g4", "text": "振幅减小，{周期不变}"}, "beat": {"k": "tired", "at": "g2b", "text": "能量耗散\n振幅{越来越小|red}"}}} />;
