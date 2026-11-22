import React from 'react';
import {AutoScene} from '../components/auto';

export const Conc: React.FC = () => <AutoScene k="conc" d={{"tag": "考点三", "title": "浓度和压强的影响", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "浓度", "at": "cc1", "text": "增大反应物浓度 → 速率{加快}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "压强", "at": "cc2", "text": "有气体参加：压缩体积 → 浓度增大 → 加快", "c": "orange", "size": 32}]}]}, {"t": "big", "at": "cc3", "text": "压强通过{改变浓度}起作用", "size": 46}], "callout": {"label": "易错", "at": "cc4", "text": "加固体、纯液体：速率{不变}；无气体的反应：压强无影响"}}} />;
