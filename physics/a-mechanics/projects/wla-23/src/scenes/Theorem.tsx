import React from 'react';
import {AutoScene} from '../components/auto';

export const Theorem: React.FC = () => <AutoScene k="theorem" d={{"tag": "考点四", "title": "动能定理", "blocks": [{"t": "big", "at": "d2", "text": "W = {E_k2 − E_k1}", "size": 64}, {"t": "text", "at": "d3", "text": "E_k1：初动能　E_k2：末动能", "size": 32}], "callout": {"label": "要点", "at": "d4", "text": "功（过程量）↔ 动能变化（{状态量}）"}, "beat": {"k": "kick", "at": "d3b", "text": "做功\n{动能变化|red}"}}} />;
