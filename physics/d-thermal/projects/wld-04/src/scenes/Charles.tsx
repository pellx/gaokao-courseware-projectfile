import React from 'react';
import {AutoScene} from '../components/auto';

export const Charles: React.FC = () => <AutoScene k="charles" d={{"tag": "考点二", "title": "查理定律", "blocks": [{"t": "big", "at": "c2", "text": "{p / T = C}　　p_1/T_1 = p_2/T_2", "size": 54}, {"t": "rule", "tag": "条件", "at": "c1", "text": "一定质量、{体积不变}", "c": "red"}, {"t": "text", "at": "c2b", "text": "密闭容器受热：T 升高，p {增大|orange}", "size": 34}], "callout": {"label": "要点", "at": "c3", "text": "Δp / ΔT = {p / T}"}}} />;
