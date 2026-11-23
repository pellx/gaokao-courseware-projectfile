import React from 'react';
import {AutoScene} from '../components/auto';

export const Natural: React.FC = () => <AutoScene k="natural" d={{"tag": "考点一", "title": "天然放射现象", "blocks": [{"t": "rule", "tag": "天然放射现象", "at": "a2", "text": "元素{自发地}发出射线", "c": "red"}, {"t": "chain", "steps": [{"at": "a1", "text": "贝克勒尔\n铀的放射性"}, {"at": "a3", "text": "居里夫妇\n钋、镭"}, {"at": "a4", "text": "射线来自\n{原子核}", "c": "orange"}], "arrows": []}], "callout": {"label": "要点", "at": "a5", "text": "原子核内部有{复杂结构}"}}} />;
