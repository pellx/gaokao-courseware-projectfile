import React from 'react';
import {AutoScene} from '../components/auto';

export const Gal: React.FC = () => <AutoScene k="gal" d={{"tag": "考点六", "title": "伽利略的研究过程", "blocks": [{"t": "chain", "steps": [{"at": "s1", "text": "猜想\nv ∝ t", "c": "red"}, {"at": "s2", "text": "数学推理\nx ∝ t^2", "c": "orange"}, {"at": "s3", "text": "斜面实验\n“冲淡”重力", "c": "red"}, {"at": "s4", "text": "合理外推\n倾角 → 90°", "c": "orange"}], "arrows": [], "center": true, "size": 32}, {"t": "text", "at": "s3", "text": "斜面上：x ∝ t^2，倾角不同都成立", "size": 32}], "callout": {"label": "要点", "at": "s5", "text": "斜面实验：{延长时间}，便于测量"}}} />;
