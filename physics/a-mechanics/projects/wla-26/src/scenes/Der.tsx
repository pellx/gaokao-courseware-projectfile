import React from 'react';
import {AutoScene} from '../components/auto';

export const Der: React.FC = () => <AutoScene k="der" d={{"tag": "考点二", "title": "定律的推导", "blocks": [{"t": "chain", "steps": [{"at": "d1", "text": "F_1 = −F_2，Δt 相同"}, {"at": "d2", "text": "Δp_1 = −Δp_2"}, {"at": "d3", "text": "总动量不变"}], "arrows": []}, {"t": "big", "at": "d3", "text": "{m_1v_1 + m_2v_2} = m_1v_1′ + m_2v_2′", "size": 44}], "callout": {"label": "要点", "at": "d4", "text": "内力只{转移}动量"}}} />;
