import React from 'react';
import {AutoScene} from '../components/auto';

export const Theory: React.FC = () => <AutoScene k="theory" d={{"tag": "考点一", "title": "地心说与日心说", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "地心说", "at": "h1", "text": "地球是宇宙中心", "c": "orange", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "日心说", "at": "h2", "text": "{太阳}是中心（哥白尼）", "c": "red", "size": 32}]}]}, {"t": "chain", "steps": [{"at": "h3", "text": "第谷：精确观测数据"}, {"at": "h3", "text": "开普勒：总结{运动规律}"}], "arrows": []}], "callout": {"label": "要点", "at": "h4", "text": "第谷观测，{开普勒}总结"}, "beat": {"k": "globe", "at": "h3b", "text": "从地心说\n到{日心说|red}"}}} />;
