import React from 'react';
import {AutoScene} from '../components/auto';

export const Template: React.FC = () => <AutoScene k="template" d={{"tag": "考点一", "title": "解释现象的答题模板", "blocks": [{"t": "chain", "steps": [{"at": "tp1", "text": "{写出平衡或反应}"}, {"at": "tp2", "text": "浓度怎样变"}, {"at": "tp3", "text": "向哪移动"}, {"at": "tp3", "text": "{现象}"}], "arrows": [], "center": true, "size": 36}], "callout": {"label": "答题模板", "at": "tp4", "text": "“存在……平衡，加入……后 c(……){减小}，平衡……移动，所以……”"}, "beat": {"k": "pointing", "at": "tp3b", "text": "大现象\n{拆成小步骤|red}"}}} />;
