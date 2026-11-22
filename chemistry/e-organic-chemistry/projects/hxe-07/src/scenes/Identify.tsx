import React from 'react';
import {AutoScene} from '../components/auto';

export const Identify: React.FC = () => <AutoScene k="identify" d={{"tag": "考点七", "title": "鉴别与除杂", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "鉴别", "at": "id1", "text": "溴水、酸性 KMnO4 {都可以}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "除杂", "at": "id2", "text": "只能用{溴水}", "c": "orange", "size": 32}]}]}, {"t": "mark", "ok": false, "at": "id3", "text": "用酸性 KMnO4 除甲烷中的乙烯：生成 CO2，引入新杂质", "size": 31}], "callout": {"label": "易错", "at": "id4", "text": "鉴别能用 KMnO4，{除杂不能用}"}}} />;
