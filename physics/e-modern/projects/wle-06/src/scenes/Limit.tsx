import React from 'react';
import {AutoScene} from '../components/auto';

export const Limit: React.FC = () => <AutoScene k="limit" d={{"tag": "考点九", "title": "玻尔理论的成功与局限", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": true, "at": "i1", "text": "引入量子观念，解释{氢原子光谱}"}]}, {"blocks": [{"t": "mark", "ok": false, "at": "i2", "text": "保留经典轨道，解释不了复杂原子"}]}]}, {"t": "rule", "tag": "电子云", "at": "i3", "text": "电子没有确定轨道，用{出现的概率}描述", "c": "red"}], "callout": {"label": "要点", "at": "i4", "text": "成功：{量子化}；局限：{经典轨道}"}}} />;
