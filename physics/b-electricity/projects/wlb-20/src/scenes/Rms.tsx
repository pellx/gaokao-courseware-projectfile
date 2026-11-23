import React from 'react';
import {AutoScene} from '../components/auto';

export const Rms: React.FC = () => <AutoScene k="rms" d={{"tag": "考点七", "title": "峰值和有效值", "blocks": [{"t": "rule", "tag": "有效值", "at": "g2", "text": "按电流的{热效应}定义", "c": "red", "size": 32}, {"t": "big", "at": "g3", "text": "I = {I_m/√2}　U = {U_m/√2}", "size": 50}], "callout": {"label": "易错", "at": "g4", "text": "√2 关系只适用于{正弦式}交流"}, "beat": {"k": "kotatsu", "at": "g2b", "text": "只看暖不暖\n有效值看{热效应|red}"}}} />;
