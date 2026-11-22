import React from 'react';
import {AutoScene} from '../components/auto';

export const Move: React.FC = () => <AutoScene k="move" d={{"tag": "考点三", "title": "电子与离子的移动", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "电子", "at": "mo1", "text": "负极 → 导线 → {正极}", "c": "red", "size": 33}]}, {"blocks": [{"t": "rule", "tag": "离子", "at": "mo2", "text": "{阳离子 → 正极}，阴离子 → 负极", "c": "orange", "size": 33}]}]}, {"t": "big", "at": "mo3", "text": "电子{不下水}，离子{不上岸}", "size": 50}], "callout": {"label": "易错", "at": "mo4", "text": "电子不经过溶液；溶液中导电的是{离子}"}}} />;
