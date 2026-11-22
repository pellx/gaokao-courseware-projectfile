import React from 'react';
import {AutoScene} from '../components/auto';

export const Force: React.FC = () => <AutoScene k="force" d={{"tag": "考点二", "title": "非静电力", "blocks": [{"t": "rule", "tag": "外电路", "at": "b1", "text": "静电力推动正电荷：正极 → 负极", "c": "orange", "size": 32}, {"t": "rule", "tag": "电源内部", "at": "b2", "text": "{非静电力}把正电荷从负极搬到正极", "c": "red", "size": 32}, {"t": "chain", "steps": [{"at": "b3", "text": "化学能等", "c": "orange"}, {"at": "b3", "text": "电势能", "c": "red"}], "arrows": []}], "callout": {"label": "要点", "at": "b4", "text": "电源：{非静电力做功}，其他形式的能 → 电势能"}, "beat": {"k": "push", "at": "b2b", "text": "非静电力\n推电荷{逆流而上|red}"}}} />;
