import React from 'react';
import {AutoScene} from '../components/auto';

export const Variable: React.FC = () => <AutoScene k="variable" d={{"tag": "考点五", "title": "陷阱四：变量不唯一", "blocks": [{"t": "mark", "ok": false, "at": "va1", "text": "浓盐酸、稀盐酸分别与两种金属反应比活泼性", "size": 31}, {"t": "rule", "tag": "比 K_sp", "at": "va2", "text": "NaCl、NaI {浓度相同}时，先出黄色沉淀 → K_sp(AgI) 更小", "c": "red", "size": 30}, {"t": "rule", "tag": "沉淀转化", "at": "va3", "text": "AgNO3 {过量}时，不能证明转化", "c": "orange", "size": 30}], "callout": {"label": "易错", "at": "va4", "text": "证明转化：{Ag^+ 不足量}"}}} />;
