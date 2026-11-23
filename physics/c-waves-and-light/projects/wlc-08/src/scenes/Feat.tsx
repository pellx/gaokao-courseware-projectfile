import React from 'react';
import {AutoScene} from '../components/auto';

export const Feat: React.FC = () => <AutoScene k="feat" d={{"tag": "考点三", "title": "电磁波的特点", "blocks": [{"t": "items", "items": [{"at": "c1", "text": "{横波}：E、B、传播方向两两垂直"}, {"at": "c2", "text": "传播{不需要介质}"}], "size": 36}, {"t": "big", "at": "c3", "text": "c = {3.0×10^8 m/s} = λf", "size": 50}], "callout": {"label": "要点", "at": "c4", "text": "能{反射、折射、干涉、衍射}"}}} />;
