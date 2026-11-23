import React from 'react';
import {AutoScene} from '../components/auto';

export const Transition: React.FC = () => <AutoScene k="transition" d={{"tag": "考点五", "title": "玻尔的频率条件", "blocks": [{"t": "big", "at": "e2", "text": "hν = {E_n − E_m}", "size": 60}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "高 → 低", "at": "e1", "lines": ["{放出}光子"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "低 → 高", "at": "e3", "lines": ["{吸收}光子"], "c": "orange", "size": 34}]}]}], "callout": {"label": "要点", "at": "e4", "text": "光子能量 = {两能级之差}"}, "beat": {"k": "jump", "at": "e3b", "text": "吸收光子\n{跳上高能级|red}"}}} />;
