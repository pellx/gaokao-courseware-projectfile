import React from 'react';
import {AutoScene} from '../components/auto';

export const Vol: React.FC = () => <AutoScene k="vol" d={{"tag": "考点五", "title": "测一滴溶液中纯油酸的体积", "blocks": [{"t": "chain", "steps": [{"at": "v1", "text": "溶液总体积 V_0"}, {"at": "v2", "text": "一滴溶液：V_0/n", "c": "orange"}, {"at": "v3", "text": "一滴纯油酸：V"}], "arrows": []}, {"t": "big", "at": "v3", "text": "V = {V_0/n} × {浓度}", "size": 60}], "callout": {"label": "要点", "at": "v4", "text": "一滴溶液的体积 × {浓度}"}}} />;
