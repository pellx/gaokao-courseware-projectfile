import React from 'react';
import {AutoScene} from '../components/auto';

export const Type: React.FC = () => <AutoScene k="type" d={{"tag": "考点一", "title": "题型与三查", "blocks": [{"t": "big", "at": "ty1", "text": "“下列方程式与所给事实{不相符}的是”", "size": 42}, {"t": "chain", "steps": [{"at": "ty3", "text": "一查\n反应和产物", "c": "red"}, {"at": "ty3", "text": "二查\n拆分", "c": "orange"}, {"at": "ty3", "text": "三查\n守恒", "c": "green"}, {"at": "ty3", "text": "再看\n用量与先后", "c": "brown"}], "arrows": [], "center": true, "size": 34}, {"t": "text", "at": "ty2", "text": "离子方程式 · 化学方程式 · 电极反应式 · 水解 · 沉淀转化", "size": 32, "center": true, "c": "muted"}], "callout": {"label": "解题方法", "at": "ty3", "text": "{反应和产物} → {拆分|orange} → {守恒|green} → 用量与先后"}}} />;
