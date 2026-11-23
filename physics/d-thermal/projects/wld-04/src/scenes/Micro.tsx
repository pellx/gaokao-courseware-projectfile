import React from 'react';
import {AutoScene} from '../components/auto';

export const Micro: React.FC = () => <AutoScene k="micro" d={{"tag": "考点七", "title": "气体实验定律的微观解释", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "等温", "at": "w1", "lines": ["平均动能不变", {"at": "w2", "text": "V 减小 → {数密度增大}"}, {"at": "w2", "text": "→ 压强增大"}], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "等容", "at": "w3", "lines": ["数密度不变", "T 升高 → {平均动能增大}", "→ 压强增大"], "c": "red", "size": 32}]}]}], "callout": {"label": "要点", "at": "w4", "text": "压强 ← {平均动能} + {数密度}"}, "beat": {"k": "mochi", "at": "w3b", "text": "撞击更猛\n{压强增大|red}"}}} />;
