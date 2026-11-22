import React from 'react';
import {AutoScene} from '../components/auto';

export const Other: React.FC = () => <AutoScene k="other" d={{"tag": "考点七", "title": "解题方法：找别的可能", "blocks": [{"t": "big", "at": "ot1", "text": "逐项问：{还有没有别的可能？}", "size": 46}, {"t": "text", "at": "ot2", "text": "干扰离子 · {过量试剂} · 挥发性物质 · 溶解氧 · 浓度温度 · 萃取稀释", "size": 31, "center": true}], "callout": {"label": "答题模板", "at": "ot4", "text": "“{还可能是……也能产生该现象}”"}, "beat": {"k": "rabbit", "at": "ot3b", "text": "先问一句\n{“还有别的可能吗？”|red}"}}} />;
