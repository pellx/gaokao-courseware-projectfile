import React from 'react';
import {AutoScene} from '../components/auto';

export const Law: React.FC = () => <AutoScene k="law" d={{"tag": "考点二", "title": "折射定律", "blocks": [{"t": "items", "items": [{"at": "b1", "text": "三线{共面}"}, {"at": "b2", "text": "分居{法线两侧}"}], "size": 38}, {"t": "big", "at": "b3", "text": "sinθ_1 / sinθ_2 = {n_12}", "size": 56}], "callout": {"label": "要点", "at": "b4", "text": "角度都是与{法线}的夹角"}}} />;
