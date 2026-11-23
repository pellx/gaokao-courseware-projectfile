import React from 'react';
import {AutoScene} from '../components/auto';

export const SeriesR: React.FC = () => <AutoScene k="seriesR" d={{"tag": "考点三", "title": "串联电路的电阻", "blocks": [{"t": "big", "at": "c1", "text": "R = {R_1 + R_2 + …}", "size": 52}, {"t": "text", "at": "c2", "text": "电压与电阻成{正比}", "size": 34}], "callout": {"label": "要点", "at": "c3", "text": "串联分压：{U_1 : U_2 = R_1 : R_2}"}}} />;
