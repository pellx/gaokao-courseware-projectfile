import React from 'react';
import {AutoScene} from '../components/auto';

export const Equi: React.FC = () => <AutoScene k="equi" d={{"tag": "考点三", "title": "等势面", "blocks": [{"t": "rule", "tag": "等势面", "at": "q1", "text": "{电势相同}的点构成的面", "c": "red", "size": 34}, {"t": "big", "at": "q2", "text": "沿等势面移动：W = {0}", "size": 48}], "callout": {"label": "要点", "at": "q3", "text": "U = 0 → {W = 0}"}}} />;
