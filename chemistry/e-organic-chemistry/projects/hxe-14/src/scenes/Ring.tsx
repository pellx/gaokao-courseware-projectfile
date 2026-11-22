import React from 'react';
import {AutoScene} from '../components/auto';

export const Ring: React.FC = () => <AutoScene k="ring" d={{"tag": "考点六", "title": "酯交换、胺解与成环", "blocks": [{"t": "items", "items": [{"at": "ri1", "text": "酯交换：RCOOR′ + R″OH ⇌ {RCOOR″} + R′OH"}, {"at": "ri2", "text": "胺解：RCOOR′ + R″NH2 → {RCONHR″} + R′OH"}, {"at": "ri3", "text": "分子内酯化 → {内酯}（五、六元环最稳定）"}], "size": 32}], "callout": {"label": "解题方法", "at": "ri4", "text": "数环的元数：{O 也算进环}"}}} />;
