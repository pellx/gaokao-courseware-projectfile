import React from 'react';
import {AutoScene} from '../components/auto';

export const Iodine: React.FC = () => <AutoScene k="iodine" d={{"tag": "考点三", "title": "氧化还原滴定（二）：碘量法", "blocks": [{"t": "big", "at": "io1", "text": "I2 + 2S2O3^2- = 2I^- + S4O6^2-", "size": 42}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "指示剂", "at": "io2", "text": "{淀粉}：蓝色 → 无色", "c": "red", "size": 31}]}, {"blocks": [{"t": "rule", "tag": "间接法", "at": "io3", "text": "待测物 + {过量 KI} → I2 → 滴定", "c": "orange", "size": 31}]}]}], "callout": {"label": "易错", "at": "io4", "text": "I2 ～ {2S2O3^2-}"}, "beat": {"k": "kita", "at": "io3b", "text": "碘量法{两步走|red}\n先变 I2，再滴 I2"}}} />;
