import React from 'react';
import {AutoScene} from '../components/auto';

export const Reduce: React.FC = () => <AutoScene k="reduce" d={{"tag": "考点二", "title": "醛的还原反应", "blocks": [{"t": "big", "at": "re2", "text": "CH3CHO + H2 → CH3CH2OH", "size": 44}, {"t": "chain", "steps": [{"at": "re3", "text": "醇"}, {"at": "re3", "text": "{醛}"}, {"at": "re3", "text": "羧酸"}], "arrows": ["氧化 ⇌ 还原", "氧化"], "center": true, "size": 40}], "callout": {"label": "考法", "at": "re4", "text": "既能氧化又能还原：往往是{醛}"}}} />;
