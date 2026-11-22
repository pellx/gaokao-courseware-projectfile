import React from 'react';
import {AutoScene} from '../components/auto';

export const Explore: React.FC = () => <AutoScene k="explore" d={{"tag": "考点七", "title": "实验探究中的 Fe^3+", "blocks": [{"t": "rule", "tag": "可逆", "at": "ex2", "text": "FeCl3 + 过量 KI，加 KSCN {仍变红} → Fe^3+ 有剩余，反应有限度", "c": "red", "size": 30}, {"t": "rule", "tag": "可逆", "at": "ex3", "text": "Fe^3+ + Ag ⇌ Fe^2+ + Ag^+：改变浓度，方向改变", "c": "orange", "size": 30}, {"t": "big", "at": "ex4", "text": "先出现的现象看{速率}，最终结果看{限度|orange}", "size": 40}], "callout": {"label": "解题方法", "at": "ex4", "text": "现象先后变化 → 想到{速率与限度}的竞争"}}} />;
