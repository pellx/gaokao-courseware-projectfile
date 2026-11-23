import React from 'react';
import {AutoScene} from '../components/auto';

export const Ways: React.FC = () => <AutoScene k="ways" d={{"tag": "考点三", "title": "磁通量变化的方式", "blocks": [{"t": "big", "at": "c1", "text": "Φ = {BS sinθ}", "size": 52}, {"t": "items", "items": [{"at": "c2", "text": "{B 变化}：磁体靠近或远离"}, {"at": "c3", "text": "{S 变化}：导体切割磁感线"}, {"at": "c4", "text": "{θ 变化}：线圈在磁场中转动"}], "size": 34}], "callout": {"label": "要点", "at": "c5", "text": "B、S、θ 任一变化 → {Φ 变化}"}}} />;
