import React from 'react';
import {AutoScene} from '../components/auto';

export const Endpoint: React.FC = () => <AutoScene k="end" d={{"tag": "考点七", "title": "滴定终点的规范描述", "blocks": [{"t": "chain", "steps": [{"at": "en1", "text": "{最后半滴}"}, {"at": "en1", "text": "{颜色变化}"}, {"at": "en1", "text": "{半分钟不恢复}"}], "arrows": [], "center": true, "size": 40}, {"t": "items", "items": [{"at": "en2", "text": "KMnO4：无色 → {浅红色}"}, {"at": "en3", "text": "碘量法：{蓝色 → 无色}"}], "size": 34}], "callout": {"label": "答题模板", "at": "en4", "text": "“最后半滴……由{某色}变为{某色}……半分钟内不恢复”"}}} />;
