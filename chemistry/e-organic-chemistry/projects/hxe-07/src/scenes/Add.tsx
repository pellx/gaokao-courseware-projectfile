import React from 'react';
import {AutoScene} from '../components/auto';

export const Add: React.FC = () => <AutoScene k="add" d={{"tag": "考点二", "title": "烯烃的加成反应", "blocks": [{"t": "big", "at": "ad2", "text": "CH2=CH2 + Br2 → {CH2BrCH2Br}", "size": 44}, {"t": "items", "items": [{"at": "ad3", "text": "+ H2 → CH3CH3"}, {"at": "ad3", "text": "+ HCl → CH3CH2Cl"}, {"at": "ad3", "text": "+ H2O → {CH3CH2OH}（催化剂、加热加压）"}], "size": 34}], "callout": {"label": "易错", "at": "ad4", "text": "两个 Br {连在不同碳上}"}, "beat": {"k": "orange", "at": "ad3b", "text": "双键张开手\n{两边各拉一个|red}"}}} />;
