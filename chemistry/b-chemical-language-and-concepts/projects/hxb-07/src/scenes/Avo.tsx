import React from 'react';
import {AutoScene} from '../components/auto';

export const Avo: React.FC = () => <AutoScene k="avo" d={{"tag": "考点四", "title": "阿伏加德罗定律及推论", "blocks": [{"t": "big", "at": "av1", "text": "同温同压、同体积 → 同{分子数}", "size": 46}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "推论一", "at": "av2", "lines": ["V1 / V2 = {n1 / n2}", "体积比 = 物质的量之比"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "推论二", "at": "av3", "lines": ["ρ_1 / ρ_2 = {M1 / M2|orange}", "与空气比：看 M 与 29"], "c": "orange", "size": 34}]}]}], "callout": {"label": "易错", "at": "av4", "text": "只适用于{气体}；分子数相同 ≠ 原子数相同（O2 与 O3）"}, "beat": {"k": "balloon", "at": "av1b", "text": "两个一样大的气球\n同温同压\n{分子数相同|red}"}}} />;
