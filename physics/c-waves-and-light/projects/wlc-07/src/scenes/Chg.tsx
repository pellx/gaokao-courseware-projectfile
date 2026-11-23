import React from 'react';
import {AutoScene} from '../components/auto';

export const Chg: React.FC = () => <AutoScene k="chg" d={{"tag": "考点三", "title": "充电过程", "blocks": [{"t": "rule", "tag": "自感", "at": "c1", "text": "电流{继续流动}并逐渐减小", "c": "red"}, {"t": "text", "at": "c2", "text": "给电容器{反向充电}", "size": 36}, {"t": "big", "at": "c3", "text": "磁场能 → {电场能}", "size": 46}], "callout": {"label": "要点", "at": "c4", "text": "充电完毕：{i = 0}，q 最大"}}} />;
