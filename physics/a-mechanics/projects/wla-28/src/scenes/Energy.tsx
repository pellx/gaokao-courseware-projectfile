import React from 'react';
import {AutoScene} from '../components/auto';

export const Energy: React.FC = () => <AutoScene k="energy" d={{"tag": "考点三", "title": "反冲中的能量", "blocks": [{"t": "chain", "steps": [{"at": "e3", "text": "化学能、弹性势能"}, {"at": "e2", "text": "{机械能}"}], "arrows": []}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "动量", "at": "e1", "text": "{守恒}", "c": "red", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "总动能", "at": "e2", "text": "{增加}", "c": "orange", "size": 34}]}]}], "callout": {"label": "易错", "at": "e4", "text": "动量守恒，机械能{不守恒}"}}} />;
