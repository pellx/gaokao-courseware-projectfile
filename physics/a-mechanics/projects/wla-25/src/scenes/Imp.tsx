import React from 'react';
import {AutoScene} from '../components/auto';

export const Imp: React.FC = () => <AutoScene k="imp" d={{"tag": "考点五", "title": "冲量", "blocks": [{"t": "big", "at": "i1", "text": "I = {FΔt}　单位 {N·s|orange}", "size": 50}, {"t": "items", "items": [{"at": "i2", "text": "{矢量}：恒力的冲量与力同向"}, {"at": "i3", "text": "{过程量}：力对时间的累积"}], "size": 34}], "callout": {"label": "易错", "at": "i4", "text": "冲量与物体{是否运动无关}"}, "beat": {"k": "drum", "at": "i3b", "text": "鼓棒敲鼓\n冲量 = {F × Δt|red}"}}} />;
