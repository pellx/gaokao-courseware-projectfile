import React from 'react';
import {AutoScene} from '../components/auto';

export const Energy: React.FC = () => <AutoScene k="energy" d={{"tag": "考点八", "title": "楞次定律与能量守恒", "blocks": [{"t": "chain", "steps": [{"at": "h1", "text": "感应电流阻碍原因", "c": "red"}, {"at": "h2", "text": "外界克服阻碍做功", "c": "orange"}, {"at": "h3", "text": "其他形式的能 → 电能", "c": "red"}], "arrows": []}, {"t": "rule", "tag": "若不阻碍", "at": "h3", "text": "电能会凭空产生，违背{能量守恒}", "c": "orange", "size": 32}], "callout": {"label": "要点", "at": "h4", "text": "楞次定律体现{能量守恒}"}}} />;
