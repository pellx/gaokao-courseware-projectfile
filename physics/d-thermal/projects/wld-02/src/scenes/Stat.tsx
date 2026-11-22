import React from 'react';
import {AutoScene} from '../components/auto';

export const Stat: React.FC = () => <AutoScene k="stat" d={{"tag": "考点二", "title": "统计规律", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "单个分子", "at": "s1", "text": "运动{偶然}、无规则", "c": "orange"}]}, {"blocks": [{"t": "rule", "tag": "大量分子", "at": "s2", "text": "整体遵从{统计规律}", "c": "red"}]}]}, {"t": "text", "at": "s2", "text": "抛大量硬币：正面、反面各约 {一半|orange}", "size": 34}], "callout": {"label": "要点", "at": "s3", "text": "统计规律只对{大量分子}成立"}, "beat": {"k": "many", "at": "s2b", "text": "个体各不相同\n整体{有规律|red}"}}} />;
