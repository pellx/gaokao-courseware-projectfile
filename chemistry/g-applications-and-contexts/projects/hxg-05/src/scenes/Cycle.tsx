import React from 'react';
import {AutoScene} from '../components/auto';

export const Cycle: React.FC = () => <AutoScene k="cycle" d={{"tag": "考点四", "title": "物料循环", "blocks": [{"t": "big", "at": "cy2", "text": "前面{加入}、后面又{生成} → 可循环", "size": 44}, {"t": "text", "at": "cy3", "text": "常见：母液、萃取剂、H2SO4、NH3", "size": 34, "center": true}], "callout": {"label": "答题模板", "at": "cy4", "text": "目的：{提高原料利用率、降低成本}"}}} />;
