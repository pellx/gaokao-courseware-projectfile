import React from 'react';
import {AutoScene} from '../components/auto';

export const High: React.FC = () => <AutoScene k="high" d={{"tag": "考点三", "title": "重力加速度随高度变化", "blocks": [{"t": "big", "at": "c2", "text": "g′ = {GM/(R + h)^2}", "size": 56}, {"t": "text", "at": "c3", "text": "高度越大，g′ {越小}", "size": 34}], "callout": {"label": "易错", "at": "c4", "text": "距离从{地心}算起"}, "beat": {"k": "mount", "at": "c3b", "text": "越高\ng′ {越小|red}"}}} />;
