import React from 'react';
import {AutoScene} from '../components/auto';

export const Method: React.FC = () => <AutoScene k="method" d={{"tag": "考点七", "title": "新型电池的解题方法", "blocks": [{"t": "chain", "steps": [{"at": "me1", "text": "{找化合价变化}"}, {"at": "me2", "text": "看电解质与离子移动"}, {"at": "me3", "text": "写电极反应、配电荷"}], "arrows": [], "center": true, "size": 34}, {"t": "items", "items": [{"at": "me1", "text": "化合价升高 → {负极}"}, {"at": "me2", "text": "阳离子 → 正极；看交换膜允许什么离子通过"}, {"at": "me3", "text": "用电解质中的离子{配平电荷}"}], "size": 32}], "callout": {"label": "解题方法", "at": "me4", "text": "电极附近 pH：看{消耗还是生成 H^+ / OH^-}"}}} />;
