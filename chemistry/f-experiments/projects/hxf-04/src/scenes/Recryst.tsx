import React from 'react';
import {AutoScene} from '../components/auto';

export const Recryst: React.FC = () => <AutoScene k="recryst" d={{"tag": "考点六", "title": "重结晶", "blocks": [{"t": "chain", "steps": [{"at": "rc2", "text": "加热溶解"}, {"at": "rc2", "text": "{趁热过滤}"}, {"at": "rc2", "text": "冷却结晶"}, {"at": "rc2", "text": "过滤、洗涤、干燥"}], "arrows": [], "center": true, "size": 34}, {"t": "text", "at": "rc3", "text": "慢慢冷却：晶体{大而纯}", "size": 33, "center": true}], "callout": {"label": "易错", "at": "rc4", "text": "趁热过滤：防止{提前析出}"}, "beat": {"k": "bocchi", "at": "rc3b", "text": "溶开再长一次\n{杂质留在母液|red}"}}} />;
