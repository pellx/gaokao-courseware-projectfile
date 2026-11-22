import React from 'react';
import {AutoScene} from '../components/auto';

export const Kinetic: React.FC = () => <AutoScene k="kinetic" d={{"tag": "考点五", "title": "用速率与限度解释", "blocks": [{"t": "rule", "tag": "先出现后消失", "at": "kn2", "text": "快的反应先出现；{限度大}的反应最终占主导", "c": "red", "size": 31}, {"t": "rule", "tag": "先慢后快", "at": "kn3", "text": "生成物{催化}（Mn^2+）或放热升温", "c": "orange", "size": 31}], "callout": {"label": "答题模板", "at": "kn4", "text": "“A {速率快}先……；B {限度大}最终……”"}, "beat": {"k": "kitawink", "at": "kn3b", "text": "先到的\n{不一定是赢家|red}"}}} />;
