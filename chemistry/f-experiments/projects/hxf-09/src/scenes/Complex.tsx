import React from 'react';
import {AutoScene} from '../components/auto';

export const Complex: React.FC = () => <AutoScene k="complex" d={{"tag": "考点四", "title": "用配位平衡解释", "blocks": [{"t": "items", "items": [{"at": "cx2", "text": "AgCl + 氨水 → [Ag(NH3)2]^+：{c(Ag^+) 降低}，溶解"}, {"at": "cx2", "text": "再加 KI → {AgI} 沉淀"}, {"at": "cx3", "text": "Fe(SCN)3 红色 + F^- → {褪色}：FeF6^3- 更稳定"}], "size": 33}], "callout": {"label": "解题方法", "at": "cx4", "text": "沉淀与配位{争夺同一金属离子}"}, "beat": {"k": "question", "at": "cx3b", "text": "Ag^+ 跟谁走？\n{看谁抓得更牢|red}"}}} />;
