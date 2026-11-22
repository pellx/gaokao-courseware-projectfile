import React from 'react';
import {AutoScene} from '../components/auto';

export const Idea: React.FC = () => <AutoScene k="idea" d={{"tag": "考点二", "title": "实验思路", "blocks": [{"t": "chain", "steps": [{"at": "i2", "text": "指针偏转方向"}, {"at": "i2", "text": "线圈中电流流向"}, {"at": "i3", "text": "安培定则：感应电流的磁场", "c": "orange"}, {"at": "i4", "text": "与原磁场、ΔΦ 比较"}], "arrows": []}], "callout": {"label": "要点", "at": "i5", "text": "比较 {感应电流的磁场} 与 {原磁场}"}}} />;
