import React from 'react';
import {AutoScene} from '../components/auto';

export const Scat: React.FC = () => <AutoScene k="scat" d={{"tag": "考点八", "title": "散射", "blocks": [{"t": "rule", "tag": "散射", "at": "c1", "text": "微观粒子{不接触}的“碰撞”", "c": "red"}, {"t": "text", "at": "c2", "text": "靠电场力等相互作用，动量守恒成立", "size": 32}, {"t": "rule", "tag": "应用", "at": "c3", "text": "快中子与{慢化剂}原子核碰撞而减速", "c": "orange", "size": 32}], "callout": {"label": "要点", "at": "c4", "text": "碰撞规律适用于{微观粒子}"}}} />;
