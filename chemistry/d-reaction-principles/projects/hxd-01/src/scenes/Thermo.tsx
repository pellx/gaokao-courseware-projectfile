import React from 'react';
import {AutoScene} from '../components/auto';

export const Thermo: React.FC = () => <AutoScene k="thermo" d={{"tag": "考点五", "title": "热化学方程式", "blocks": [{"t": "big", "at": "e2", "text": "H2(g) + 1/2 O2(g) = H2O(l)　ΔH = {−285.8 kJ/mol}", "size": 38}, {"t": "items", "items": [{"at": "e1", "text": "标明状态：g 气体、l 液体、s 固体、aq 溶液"}, {"at": "e2", "text": "系数表示{物质的量}，可以是分数"}, {"at": "e3", "text": "系数加倍，ΔH 加倍；反写，ΔH {变号}"}], "size": 32}], "callout": {"label": "易错", "at": "e4", "text": "漏状态、漏“−”号、漏单位都不得分；可逆反应 ΔH 按{完全反应}计"}, "beat": {"k": "jump", "at": "e3b", "text": "生成 H2O(l) 比 H2O(g)\n{放热更多|red}"}}} />;
