import React from 'react';
import {AutoScene} from '../components/auto';

export const Path: React.FC = () => <AutoScene k="path" d={{"tag": "考点五", "title": "平抛运动的轨迹", "blocks": [{"t": "chain", "steps": [{"at": "e1", "text": "x = v_0t → t = x/v_0"}, {"at": "e1", "text": "代入 y = ½gt^2"}, {"at": "e2", "text": "y = {gx^2/2v_0^2}"}], "arrows": []}, {"t": "big", "at": "e3", "text": "轨迹是{抛物线}", "size": 48}], "callout": {"label": "要点", "at": "e4", "text": "顶点在抛出点、开口{向下}"}}} />;
