import React from 'react';
import {AutoScene} from '../components/auto';

export const Lead: React.FC = () => <AutoScene k="lead" d={{"tag": "考点二", "title": "铅酸蓄电池（放电）", "blocks": [{"t": "items", "items": [{"at": "le2", "text": "负极：Pb + SO4^2- − 2e^- = {PbSO4}"}, {"at": "le2", "text": "正极：PbO2 + 4H^+ + SO4^2- + 2e^- = {PbSO4} + 2H2O"}, {"at": "le3", "text": "总：Pb + PbO2 + 2H2SO4 ⇌ 2PbSO4 + 2H2O"}], "size": 31}], "callout": {"label": "易错", "at": "le4", "text": "放电：两极{质量都增加}，硫酸浓度{减小}"}}} />;
