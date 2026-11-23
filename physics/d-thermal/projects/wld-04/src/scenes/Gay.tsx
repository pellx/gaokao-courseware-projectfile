import React from 'react';
import {AutoScene} from '../components/auto';

export const Gay: React.FC = () => <AutoScene k="gay" d={{"tag": "考点一", "title": "盖—吕萨克定律", "blocks": [{"t": "big", "at": "g2", "text": "{V / T = C}　　V_1/T_1 = V_2/T_2", "size": 54}, {"t": "rule", "tag": "条件", "at": "g1", "text": "一定质量、{压强不变}", "c": "red"}], "callout": {"label": "易错", "at": "g3", "text": "与{热力学温度 T} 成正比，不是 t"}, "beat": {"k": "giant", "at": "g2b", "text": "p 不变\nT 翻倍，V 也{翻倍|red}"}}} />;
