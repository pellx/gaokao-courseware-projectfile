import React from 'react';
import {AutoScene} from '../components/auto';

export const Expr: React.FC = () => <AutoScene k="expr" d={{"tag": "考点七", "title": "简谐运动的表达式", "blocks": [{"t": "big", "at": "e1", "text": "{x = A sin(ωt + φ)}", "size": 56}, {"t": "items", "items": [{"at": "e2", "text": "{ω = 2π/T = 2πf}：圆频率"}, {"at": "e3", "text": "{ωt + φ}：相位"}, {"at": "e4", "text": "{φ}：初相（t = 0 时的相位）"}], "size": 34}], "callout": {"label": "要点", "at": "e5", "text": "A、ω、φ 确定，运动{完全确定}"}}} />;
