import React from 'react';
import {AutoScene} from '../components/auto';

export const Check: React.FC = () => <AutoScene k="check" d={{"tag": "考点六", "title": "防护效果的检验", "blocks": [{"t": "rule", "tag": "试剂", "at": "ch1", "text": "{K3[Fe(CN)6]}：遇 Fe^2+ 生成蓝色沉淀", "c": "red", "size": 32}, {"t": "rule", "tag": "干扰", "at": "ch2", "text": "K3[Fe(CN)6] {本身能氧化 Fe}，直接滴在铁附近会误判", "c": "orange", "size": 32}, {"t": "rule", "tag": "改进", "at": "ch3", "text": "{先取出溶液}再检验，设置对照", "c": "green", "size": 32}], "callout": {"label": "答题模板", "at": "ch4", "text": "取电极附近溶液 → 滴 K3[Fe(CN)6] → {无蓝色沉淀} → 未被腐蚀"}}} />;
