import React from 'react';
import {AutoScene} from '../components/auto';

export const Motion: React.FC = () => <AutoScene k="motion" d={{"tag": "考点一", "title": "运动性质", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "v ∥ B", "at": "a2", "lines": ["不受洛伦兹力", "{匀速直线运动}"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "v ⊥ B", "at": "a3", "lines": ["F = qvB", "{匀速圆周运动}"], "c": "red", "size": 32}]}]}], "callout": {"label": "要点", "at": "a4", "text": "v ∥ B 匀速直线；v ⊥ B {匀速圆周}"}, "beat": {"k": "wheel", "at": "a3b", "text": "一圈又一圈\n{匀速绕圈|red}"}}} />;
