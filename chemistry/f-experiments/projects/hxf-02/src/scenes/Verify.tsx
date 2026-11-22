import React from 'react';
import {AutoScene} from '../components/auto';

export const Verify: React.FC = () => <AutoScene k="verify" d={{"tag": "考点六", "title": "验证性质的装置", "blocks": [{"t": "rule", "tag": "目的", "at": "ve2", "text": "证明酸性 HCl > H2CO3 > H2SiO3", "c": "red", "size": 32}, {"t": "mark", "ok": false, "at": "ve2", "text": "浓盐酸 + Na2CO3，气体直接通入 Na2SiO3：{HCl 挥发干扰}", "size": 31}, {"t": "mark", "ok": true, "at": "ve3", "text": "中间加{饱和 NaHCO3 溶液}除去 HCl", "size": 31}], "callout": {"label": "易错", "at": "ve4", "text": "反应物{有挥发性} → 想到干扰"}, "beat": {"k": "wink", "at": "ve3b", "text": "中间混进别的东西\n{就证明不了|red}"}}} />;
