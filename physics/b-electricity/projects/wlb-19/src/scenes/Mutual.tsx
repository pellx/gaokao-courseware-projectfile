import React from 'react';
import {AutoScene} from '../components/auto';

export const Mutual: React.FC = () => <AutoScene k="mutual" d={{"tag": "考点六", "title": "互感", "blocks": [{"t": "chain", "steps": [{"at": "f1", "text": "线圈 1 电流变化", "c": "orange"}, {"at": "f1", "text": "磁通量变化", "c": "red"}, {"at": "f2", "text": "线圈 2 中产生电动势", "c": "orange"}], "arrows": []}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "利用", "at": "f3", "lines": ["{变压器}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "防止", "at": "f4", "lines": ["干扰电路"], "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "f4", "text": "可以利用，也要防止{干扰}"}}} />;
