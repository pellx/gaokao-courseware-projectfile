import React from 'react';
import {AutoScene} from '../components/auto';

export const Hydro: React.FC = () => <AutoScene k="hydro" d={{"tag": "考点二", "title": "水解反应", "blocks": [{"t": "big", "at": "hy2", "text": "CH3CH2Br + NaOH →(水，△) CH3CH2{OH} + NaBr", "size": 40}, {"t": "rule", "tag": "条件", "at": "hy1", "text": "{NaOH 水溶液、加热}", "c": "red", "size": 33}, {"t": "rule", "tag": "范围", "at": "hy3", "text": "所有卤代烃都能水解", "c": "orange", "size": 33}], "callout": {"label": "易错", "at": "hy4", "text": "别漏 NaBr；条件写{“水，△”}"}, "beat": {"k": "bear", "at": "hy3b", "text": "水溶液中\nOH^- {换掉卤素|red}"}}} />;
