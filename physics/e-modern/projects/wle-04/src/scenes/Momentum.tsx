import React from 'react';
import {AutoScene} from '../components/auto';

export const Momentum: React.FC = () => <AutoScene k="momentum" d={{"tag": "考点二", "title": "光子的动量", "blocks": [{"t": "big", "at": "b2", "text": "p = {h/λ}", "size": 60}, {"t": "chain", "steps": [{"at": "b3", "text": "光子与电子\n碰撞"}, {"at": "b4", "text": "光子动量\n{变小}"}, {"at": "b4", "text": "波长\n{变长}", "c": "orange"}], "arrows": []}, {"t": "text", "at": "b3", "text": "碰撞遵循{能量守恒}和{动量守恒}", "size": 32}], "callout": {"label": "易错", "at": "b5", "text": "散射后频率{变小}、波长变长，光速不变"}, "beat": {"k": "donut", "at": "b4b", "text": "动量被\n{分走一部分|red}"}}} />;
