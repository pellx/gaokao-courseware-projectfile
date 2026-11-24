import React from 'react';
import {AutoScene} from '../components/auto';

export const Res: React.FC = () => <AutoScene k="res" d={{"tag": "考点五", "title": "共振", "blocks": [{"t": "big", "at": "r1", "text": "{f驱 = f固}", "size": 64}, {"t": "rule", "tag": "现象", "at": "r2", "text": "受迫振动的{振幅最大}", "c": "red"}, {"t": "rule", "tag": "原因", "at": "r3", "text": "驱动力总做{正功}，吸收能量最多", "c": "orange"}], "callout": {"label": "要点", "at": "r4", "text": "共振条件：{f驱 = f固}"}}} />;
