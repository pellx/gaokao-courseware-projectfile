import React from 'react';
import {AutoScene} from '../components/auto';

export const Use: React.FC = () => <AutoScene k="use" d={{"tag": "考点六", "title": "原电池原理的应用", "blocks": [{"t": "items", "items": [{"at": "us1", "text": "{加快反应速率}：Zn + 稀硫酸中加几滴 CuSO4"}, {"at": "us2", "text": "{比较活泼性}：溶解的一极（负极）一般更活泼"}, {"at": "us3", "text": "金属的腐蚀与防护"}], "size": 34}], "callout": {"label": "考法", "at": "us4", "text": "比较活泼性时注意{特殊电解质}"}, "beat": {"k": "duo", "at": "us3b", "text": "一个给电子，一个收电子\n{反应更快|red}"}}} />;
