import React from 'react';
import {AutoScene} from '../components/auto';

export const Hot: React.FC = () => <AutoScene k="hot" d={{"tag": "考点三", "title": "热平衡与热平衡定律", "blocks": [{"t": "rule", "tag": "热平衡", "at": "h1", "text": "两系统接触，状态参量{不再变化}", "c": "red"}, {"t": "chain", "steps": [{"at": "h2", "text": "A 与 C 热平衡"}, {"at": "h2", "text": "B 与 C 热平衡"}, {"at": "h2", "text": "A 与 B {热平衡}", "c": "red"}], "arrows": []}], "callout": {"label": "要点", "at": "h3", "text": "又叫{热力学第零定律}"}, "beat": {"k": "kotatsu", "at": "h2b", "text": "都和被炉热平衡\n彼此{也热平衡|red}"}}} />;
