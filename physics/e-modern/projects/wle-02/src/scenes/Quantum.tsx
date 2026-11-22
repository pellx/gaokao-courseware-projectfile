import React from 'react';
import {AutoScene} from '../components/auto';

export const Quantum: React.FC = () => <AutoScene k="quantum" d={{"tag": "考点五", "title": "普朗克的能量子假设", "blocks": [{"t": "rule", "tag": "假设", "at": "e1", "text": "带电微粒的能量只能是最小能量值 ε 的{整数倍}", "c": "red"}, {"t": "big", "at": "e2", "text": "ε = {hν}", "size": 60}, {"t": "text", "at": "e3", "text": "h = {6.626×10^-34 J·s}（普朗克常量）", "size": 34}], "callout": {"label": "要点", "at": "e4", "text": "普朗克公式与实验{符合得很好}"}, "beat": {"k": "gift", "at": "e3b", "text": "能量\n{一份一份|red}地给"}}} />;
