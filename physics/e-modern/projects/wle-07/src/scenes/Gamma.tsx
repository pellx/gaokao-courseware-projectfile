import React from 'react';
import {AutoScene} from '../components/auto';

export const Gamma: React.FC = () => <AutoScene k="gamma" d={{"tag": "考点七", "title": "γ 射线的产生", "blocks": [{"t": "chain", "steps": [{"at": "g1", "text": "α、β 衰变\n新核处于{高能级}"}, {"at": "g2", "text": "向低能级跃迁"}, {"at": "g2", "text": "放出 {γ 光子}", "c": "orange"}], "arrows": []}, {"t": "text", "at": "g3", "text": "γ 射线常伴随 α、β 射线产生", "size": 34}], "callout": {"label": "易错", "at": "g4", "text": "γ 光子{不改变}质量数和电荷数"}}} />;
