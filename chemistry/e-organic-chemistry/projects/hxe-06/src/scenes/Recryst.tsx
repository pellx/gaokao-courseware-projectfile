import React from 'react';
import {AutoScene} from '../components/auto';

export const Recryst: React.FC = () => <AutoScene k="recryst" d={{"tag": "考点四", "title": "重结晶：提纯苯甲酸", "blocks": [{"t": "chain", "steps": [{"at": "rc2", "text": "加热溶解"}, {"at": "rc2", "text": "{趁热过滤}"}, {"at": "rc2", "text": "冷却结晶"}, {"at": "rc2", "text": "过滤洗涤干燥"}], "arrows": [], "center": true, "size": 34}, {"t": "rule", "tag": "溶剂", "at": "rc3", "text": "杂质很易溶或很难溶；被提纯物溶解度{随温度变化大}", "c": "orange", "size": 31}], "callout": {"label": "易错", "at": "rc4", "text": "趁热过滤：防止苯甲酸{提前析出}"}, "beat": {"k": "sleep", "at": "rc3b", "text": "冷却结晶\n{慢慢来|red}"}}} />;
