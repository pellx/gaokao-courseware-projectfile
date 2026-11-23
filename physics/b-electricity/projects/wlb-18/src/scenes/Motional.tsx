import React from 'react';
import {AutoScene} from '../components/auto';

export const Motional: React.FC = () => <AutoScene k="motional" d={{"tag": "考点六", "title": "动生电动势", "blocks": [{"t": "chain", "steps": [{"at": "f1", "text": "导体运动", "c": "orange"}, {"at": "f2", "text": "自由电荷受洛伦兹力", "c": "red"}, {"at": "f3", "text": "电荷定向移动", "c": "orange"}], "arrows": []}, {"t": "rule", "tag": "非静电力", "at": "f3", "text": "与{洛伦兹力}有关", "c": "red", "size": 34}], "callout": {"label": "要点", "at": "f4", "text": "非静电力与{洛伦兹力}有关"}}} />;
