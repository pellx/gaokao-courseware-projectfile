import React from 'react';
import {AutoScene} from '../components/auto';

export const Identify: React.FC = () => <AutoScene k="identify" d={{"tag": "考点三", "title": "鉴别方法", "blocks": [{"t": "mark", "ok": true, "at": "id1", "text": "固体{加热}：放出气体使石灰水变浑浊的是 NaHCO3", "size": 31}, {"t": "mark", "ok": true, "at": "id2", "text": "溶液加 {CaCl2}：有白色沉淀的是 Na2CO3", "size": 31}, {"t": "mark", "ok": true, "at": "id3", "text": "逐滴加稀盐酸：{立即}有气泡的是 NaHCO3", "size": 31}, {"t": "mark", "ok": false, "at": "id4", "text": "加澄清石灰水（两者都有白色沉淀）", "size": 31}], "callout": {"label": "易错", "at": "id4", "text": "{不能用澄清石灰水}鉴别：都生成 CaCO3"}}} />;
