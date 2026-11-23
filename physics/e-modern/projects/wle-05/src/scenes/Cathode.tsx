import React from 'react';
import {AutoScene} from '../components/auto';

export const Cathode: React.FC = () => <AutoScene k="cathode" d={{"tag": "考点一", "title": "阴极射线与电子的发现", "blocks": [{"t": "chain", "steps": [{"at": "a1", "text": "阴极射线"}, {"at": "a2", "text": "电场、磁场中\n{偏转}"}, {"at": "a3", "text": "带负电粒子\n测出{比荷}"}, {"at": "a4", "text": "{电子}", "c": "orange"}], "arrows": []}, {"t": "text", "at": "a3", "text": "不同材料的阴极，比荷{都相同}", "size": 32}], "callout": {"label": "要点", "at": "a5", "text": "阴极射线是{电子流}"}}} />;
