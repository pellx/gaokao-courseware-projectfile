import React from 'react';
import {AutoScene} from '../components/auto';

export const ParR: React.FC = () => <AutoScene k="parR" d={{"tag": "考点四", "title": "并联电路的电阻", "blocks": [{"t": "big", "at": "d1", "text": "1/R = {1/R_1 + 1/R_2 + …}", "size": 50}, {"t": "text", "at": "d2", "text": "电流与电阻成{反比}", "size": 34}], "callout": {"label": "要点", "at": "d3", "text": "并联分流：{I_1 : I_2 = R_2 : R_1}"}, "beat": {"k": "a2", "at": "d2b", "text": "电压相同\n电阻小的支路电流{大|red}"}}} />;
