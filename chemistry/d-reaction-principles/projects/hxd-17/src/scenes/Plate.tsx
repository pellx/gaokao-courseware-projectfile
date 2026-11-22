import React from 'react';
import {AutoScene} from '../components/auto';

export const Plate: React.FC = () => <AutoScene k="plate" d={{"tag": "考点二", "title": "电镀", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "阳极", "at": "pl1", "text": "{镀层金属}（Cu）", "c": "red", "size": 33}]}, {"blocks": [{"t": "rule", "tag": "阴极", "at": "pl1", "text": "{镀件}（Fe）", "c": "orange", "size": 33}]}]}, {"t": "text", "at": "pl2", "text": "阳极 Cu − 2e^- = Cu^2+　阴极 Cu^2+ + 2e^- = Cu", "size": 33, "center": true}, {"t": "big", "at": "pl3", "text": "电镀液浓度{基本不变}", "size": 44}], "callout": {"label": "易错", "at": "pl4", "text": "镀件接电源{负极}"}, "beat": {"k": "gold", "at": "pl2b", "text": "被镀的站{阴极|red}\n镀层金属站阳极"}}} />;
