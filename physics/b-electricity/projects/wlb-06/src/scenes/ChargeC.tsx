import React from 'react';
import {AutoScene} from '../components/auto';

export const ChargeC: React.FC = () => <AutoScene k="charge" d={{"tag": "考点二", "title": "充电与放电", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "充电", "at": "q1", "lines": ["两极板带{等量异种}电荷", "电源能量 → 储存"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "放电", "at": "q2", "lines": ["两极板电荷{中和}", "电场能 → 其他形式能"], "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "q3", "text": "Q 指{一个极板}电荷量的绝对值"}, "beat": {"k": "a1", "at": "q2b", "text": "充电：{储存|red}能量\n放电：{释放|orange}能量"}}} />;
