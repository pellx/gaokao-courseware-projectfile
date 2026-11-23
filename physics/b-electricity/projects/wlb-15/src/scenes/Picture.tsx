import React from 'react';
import {AutoScene} from '../components/auto';

export const Picture: React.FC = () => <AutoScene k="picture" d={{"tag": "考点六", "title": "运动的物理图景", "blocks": [{"t": "rule", "tag": "做功", "at": "f1", "text": "洛伦兹力{不做功}", "c": "red", "size": 32}, {"t": "rule", "tag": "能量", "at": "f2", "text": "速率不变，{动能不变}", "c": "red", "size": 32}, {"t": "rule", "tag": "绕向", "at": "f3", "text": "电性相反的粒子{绕行方向相反}", "c": "orange", "size": 32}], "callout": {"label": "易错", "at": "f4", "text": "只改变方向，{不改变动能}"}}} />;
