import React from 'react';
import {AutoScene} from '../components/auto';

export const Cond: React.FC = () => <AutoScene k="cond" d={{"tag": "考点五", "title": "守恒条件辨析", "blocks": [{"t": "rule", "tag": "不等于", "at": "e1", "text": "“只有重力或弹力做功” ≠ “{只受}重力或弹力”", "c": "red"}, {"t": "items", "items": [{"at": "e2", "text": "其他力{不做功}：守恒"}, {"at": "e3", "text": "其他力做功{代数和为 0}：守恒"}], "size": 32}], "callout": {"label": "易错", "at": "e4", "text": "看{做功}，不看受力"}}} />;
