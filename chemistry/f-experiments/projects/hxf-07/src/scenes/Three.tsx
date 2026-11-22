import React from 'react';
import {AutoScene} from '../components/auto';

export const Three: React.FC = () => <AutoScene k="three" d={{"tag": "考点一", "title": "判断三看", "blocks": [{"t": "chain", "steps": [{"at": "th1", "text": "{操作}"}, {"at": "th2", "text": "{现象}"}, {"at": "th3", "text": "{结论}"}], "arrows": [], "center": true, "size": 46}, {"t": "items", "items": [{"at": "th1", "text": "操作：试剂、用量、顺序"}, {"at": "th2", "text": "现象：会不会真的出现"}, {"at": "th3", "text": "结论：{是否唯一}"}], "size": 35}], "callout": {"label": "解题方法", "at": "th4", "text": "错误多在{结论不唯一}"}}} />;
