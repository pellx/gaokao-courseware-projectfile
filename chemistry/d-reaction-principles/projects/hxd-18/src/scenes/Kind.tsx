import React from 'react';
import {AutoScene} from '../components/auto';

export const Kind: React.FC = () => <AutoScene k="kind" d={{"tag": "考点一", "title": "化学腐蚀与电化学腐蚀", "blocks": [{"t": "big", "at": "ki1", "text": "本质：金属{失电子被氧化}", "size": 46}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "化学腐蚀", "at": "ki2", "text": "直接反应，{无电流}", "c": "orange", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "电化学腐蚀", "at": "ki3", "text": "形成原电池，{更普遍、更快}", "c": "red", "size": 32}]}]}], "callout": {"label": "易错", "at": "ki4", "text": "钢铁在潮湿空气中：主要是{电化学腐蚀}"}}} />;
