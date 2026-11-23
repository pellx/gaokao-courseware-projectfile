import React from 'react';
import {AutoScene} from '../components/auto';

export const Principle: React.FC = () => <AutoScene k="principle" d={{"tag": "考点二", "title": "实验原理", "blocks": [{"t": "big", "at": "p1", "text": "钩码静止：{F = mg}", "size": 48}, {"t": "big", "at": "p3", "text": "伸长量　{x = l − l_0}", "size": 48, "c": "orange", "soft": "orangeSoft"}], "callout": {"label": "要点", "at": "p4", "text": "钩码{静止}时弹力才等于重力"}, "beat": {"k": "dino", "at": "p3b", "text": "{静止|red}时\n弹力 = 重力"}}} />;
