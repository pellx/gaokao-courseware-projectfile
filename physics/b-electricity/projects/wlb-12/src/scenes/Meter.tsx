import React from 'react';
import {AutoScene} from '../components/auto';

export const Meter: React.FC = () => <AutoScene k="meter" d={{"tag": "考点六", "title": "磁电式电流表的原理与特点", "blocks": [{"t": "chain", "steps": [{"at": "f1", "text": "通电线圈受安培力", "c": "red"}, {"at": "f1", "text": "弹簧扭转阻碍", "c": "orange"}, {"at": "f2", "text": "偏角反映电流", "c": "red"}], "arrows": []}, {"t": "rule", "tag": "大小", "at": "f2", "text": "电流越大，{偏角越大}", "c": "red", "size": 32}, {"t": "rule", "tag": "方向", "at": "f3", "text": "偏转方向反映{电流方向}", "c": "orange", "size": 32}], "callout": {"label": "要点", "at": "f4", "text": "灵敏度高，允许电流{很弱}"}}} />;
