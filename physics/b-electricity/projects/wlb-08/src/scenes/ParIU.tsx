import React from 'react';
import {AutoScene} from '../components/auto';

export const ParIU: React.FC = () => <AutoScene k="parIU" d={{"tag": "考点二", "title": "并联电路的电流和电压", "blocks": [{"t": "big", "at": "b1", "text": "U = U_1 = U_2 = …", "size": 48}, {"t": "big", "at": "b2", "text": "I = I_1 + I_2 + …", "size": 48, "c": "orange", "soft": "orangeSoft"}], "callout": {"label": "要点", "at": "b3", "text": "并联：各支路{电压相等}"}}} />;
