import React from 'react';
import {AutoScene} from '../components/auto';

export const Elem: React.FC = () => <AutoScene k="elem" d={{"tag": "考点五", "title": "元电荷", "blocks": [{"t": "big", "at": "e1", "text": "e = {1.60×10^-19 C}", "size": 56}, {"t": "items", "items": [{"at": "e2", "text": "任何带电体的电荷量都是 e 的{整数倍}"}, {"at": "e3", "text": "比荷 = 电荷量 / 质量，单位 {C/kg|orange}"}], "size": 32}], "callout": {"label": "易错", "at": "e4", "text": "元电荷是{电荷量}，不是电子或质子"}}} />;
