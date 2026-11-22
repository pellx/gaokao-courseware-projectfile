import React from 'react';
import {AutoScene} from '../components/auto';

export const Simul: React.FC = () => <AutoScene k="simul" d={{"tag": "考点四", "title": "同时的相对性", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "车厢里的人", "at": "d2", "lines": ["光到达前、后壁", "{同时}"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "地面上的人", "at": "d3", "lines": ["后壁迎着光运动", "光{先到后壁}"], "c": "orange", "size": 34}]}]}], "callout": {"label": "要点", "at": "d4", "text": "“同时”是{相对的}，与参考系有关"}}} />;
