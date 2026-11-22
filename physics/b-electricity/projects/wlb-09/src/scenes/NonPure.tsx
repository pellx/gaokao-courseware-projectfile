import React from 'react';
import {AutoScene} from '../components/auto';

export const NonPure: React.FC = () => <AutoScene k="nonpure" d={{"tag": "考点五", "title": "非纯电阻电路", "blocks": [{"t": "rule", "tag": "例子", "at": "e1", "text": "{电动机}、电解槽", "c": "red", "size": 34}, {"t": "big", "at": "e2", "text": "UI {>} I^2R　W {>} Q", "size": 54}], "callout": {"label": "易错", "at": "e3", "text": "欧姆定律{不适用}：U ≠ IR"}, "beat": {"k": "band", "at": "e2b", "text": "电能变成{声和光|red}\n不只是发热"}}} />;
