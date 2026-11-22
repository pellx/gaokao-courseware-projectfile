import React from 'react';
import {AutoScene} from '../components/auto';

export const Move: React.FC = () => <AutoScene k="move" d={{"tag": "考点二", "title": "离子和电子的移动", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "阳离子", "at": "mv1", "text": "→ {阴极}", "c": "red", "size": 36}]}, {"blocks": [{"t": "rule", "tag": "阴离子", "at": "mv1", "text": "→ {阳极|orange}", "c": "orange", "size": 36}]}]}, {"t": "text", "at": "mv2", "text": "电子：电源负极 → 阴极；阳极 → 电源正极（{不经过溶液}）", "size": 32, "center": true}, {"t": "big", "at": "mv3", "text": "阳离子总是移向{得电子的一极}", "size": 42}], "callout": {"label": "易错", "at": "mv4", "text": "原电池阳离子 → {正极}；电解池阳离子 → {阴极}"}}} />;
