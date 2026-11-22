import React from 'react';
import {AutoScene} from '../components/auto';

export const Mol: React.FC = () => <AutoScene k="mol" d={{"tag": "考点一", "title": "物质的量与阿伏加德罗常数", "blocks": [{"t": "big", "at": "mo2", "text": "n = N / N_A　　N_A ≈ {6.02 × 10^23 mol^-1}", "size": 46}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "对象", "at": "mo3", "text": "只用于{微观粒子}：分子、原子、离子、电子", "c": "red", "size": 30}]}, {"blocks": [{"t": "rule", "tag": "写法", "at": "mo4", "text": "指明粒子：{1 mol H2}，不说“1 mol 氢”", "c": "orange", "size": 30}]}]}], "callout": {"label": "易错", "at": "mo4", "text": "“1 mol 氢”不明确；“1 mol 大米”错误"}, "beat": {"k": "box", "at": "mo2b", "text": "数不过来就按“盒”数\n{1 mol = 6.02×10^23 个|red}"}}} />;
