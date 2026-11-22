import React from 'react';
import {AutoScene} from '../components/auto';

export const Structure: React.FC = () => <AutoScene k="structure" d={{"tag": "考点一", "title": "探究题的结构", "blocks": [{"t": "chain", "steps": [{"at": "st1", "text": "问题"}, {"at": "st1", "text": "猜想"}, {"at": "st1", "text": "{设计实验}"}, {"at": "st1", "text": "现象"}, {"at": "st1", "text": "{结论}"}, {"at": "st1", "text": "反思"}], "arrows": [], "center": true, "size": 32}, {"t": "text", "at": "st2", "text": "北京卷：从“{意外现象}”出发，一步步找原因", "size": 33, "center": true}], "callout": {"label": "解题方法", "at": "st4", "text": "每个实验写一句“{说明了什么}”"}}} />;
