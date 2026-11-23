import React from 'react';
import {AutoScene} from '../components/auto';

export const High: React.FC = () => <AutoScene k="high" d={{"tag": "考点七", "title": "高压输电", "blocks": [{"t": "chain", "steps": [{"at": "g1", "text": "U {↑}"}, {"at": "g1", "text": "I = P/U {↓}", "c": "orange"}, {"at": "g2", "text": "P_损 = I^2r {↓↓}", "c": "red"}], "arrows": []}, {"t": "text", "at": "g3", "text": "减小导线电阻：作用{有限}", "size": 36}], "callout": {"label": "要点", "at": "g4", "text": "U 变 n 倍，损失变 {1/n^2}"}}} />;
