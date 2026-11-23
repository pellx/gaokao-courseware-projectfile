import React from 'react';
import {AutoScene} from '../components/auto';

export const State: React.FC = () => <AutoScene k="state" d={{"tag": "考点六", "title": "理想气体的状态方程", "blocks": [{"t": "big", "at": "s2", "text": "{pV / T = C}", "size": 64}, {"t": "text", "at": "s2", "text": "p_1V_1 / T_1 = p_2V_2 / T_2", "size": 38}, {"t": "chain", "steps": [{"at": "s3", "text": "T 不变 → 玻意耳"}, {"at": "s3", "text": "p 不变 → 盖—吕萨克"}, {"at": "s3", "text": "V 不变 → 查理"}], "arrows": []}], "callout": {"label": "要点", "at": "s4", "text": "C 由{物质的量}决定"}}} />;
