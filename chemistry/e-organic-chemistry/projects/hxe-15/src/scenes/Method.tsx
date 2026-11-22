import React from 'react';
import {AutoScene} from '../components/auto';

export const Method: React.FC = () => <AutoScene k="method" d={{"tag": "考点六", "title": "推断方法", "blocks": [{"t": "items", "items": [{"at": "me1", "text": "{正推}：原料 → 按条件往后推"}, {"at": "me2", "text": "{逆推}：目标 → 在酯基、酰胺基处断开"}, {"at": "me3", "text": "{两头夹击}：前后结构 + 分子式"}], "size": 36}], "callout": {"label": "解题方法", "at": "me4", "text": "{两头夹击 + 分子式差值}"}, "beat": {"k": "sigh", "at": "me3b", "text": "两头往中间推\n{最可靠|red}"}}} />;
