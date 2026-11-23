import React from 'react';
import {AutoScene} from '../components/auto';

export const Bind: React.FC = () => <AutoScene k="bind" d={{"tag": "考点四", "title": "结合能", "blocks": [{"t": "rule", "tag": "结合能", "at": "d2", "text": "把原子核分开成{核子}所需要的能量", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "d2", "text": "原子核 → 核子\n{吸收}能量", "size": 40}]}, {"blocks": [{"t": "big", "at": "d3", "text": "核子 → 原子核\n{放出|orange}能量", "size": 40, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "要点", "at": "d4", "text": "分开{吸收}，结合{放出}，数值相等"}, "beat": {"k": "pull", "at": "d3b", "text": "想分开\n得{付出能量|red}"}}} />;
