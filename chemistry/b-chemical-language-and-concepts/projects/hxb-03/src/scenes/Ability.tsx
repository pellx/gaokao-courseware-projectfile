import React from 'react';
import {AutoScene} from '../components/auto';

export const Ability: React.FC = () => <AutoScene k="ability" d={{"tag": "考点五", "title": "溶液的导电能力", "blocks": [{"t": "big", "at": "ab1", "text": "导电能力 ∝ {离子浓度} × {离子电荷}", "size": 44}, {"t": "mark", "ok": false, "at": "ab2", "text": "强电解质溶液导电能力一定强（很稀的盐酸 < 较浓的醋酸）", "size": 30}, {"t": "mark", "ok": true, "at": "ab3", "text": "{同浓度}时：强电解质溶液导电能力 > 弱电解质溶液", "size": 30}], "callout": {"label": "易错", "at": "ab4", "text": "比较电解质强弱，必须在{相同浓度}下比导电能力"}, "beat": {"k": "run", "at": "ab1b", "text": "跑起来才导电\n{离子浓度越大、电荷越多|red}\n导电越强"}}} />;
