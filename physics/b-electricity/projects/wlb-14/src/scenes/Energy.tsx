import React from 'react';
import {AutoScene} from '../components/auto';

export const Energy: React.FC = () => <AutoScene k="energy" d={{"tag": "考点八", "title": "能量转化", "blocks": [{"t": "chain", "steps": [{"at": "h1", "text": "静电力做功 W", "c": "red"}, {"at": "h1", "text": "电势能减少 W", "c": "orange"}, {"at": "h2", "text": "动能增加 W", "c": "red"}], "arrows": []}, {"t": "rule", "tag": "守恒", "at": "h3", "text": "只有静电力做功：E_p + E_k {不变}", "c": "red", "size": 32}], "callout": {"label": "要点", "at": "h4", "text": "电势能减少量 = {动能增加量}"}}} />;
