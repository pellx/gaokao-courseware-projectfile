import React from 'react';
import {AutoScene} from '../components/auto';

export const Principle: React.FC = () => <AutoScene k="principle" d={{"tag": "考点一", "title": "实验原理", "blocks": [{"t": "big", "at": "a1", "text": "T = 2π√(l/g)", "size": 48}, {"t": "big", "at": "a2", "text": "{g = 4π^2l / T^2}", "size": 60}, {"t": "text", "at": "a3", "text": "测出{摆长 l} 和{周期 T}，即可求 g", "size": 34}], "callout": {"label": "要点", "at": "a4", "text": "摆角{较小}时才是简谐运动；周期与质量、振幅无关"}}} />;
