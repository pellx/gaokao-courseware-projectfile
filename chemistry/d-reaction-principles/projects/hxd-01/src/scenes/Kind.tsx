import React from 'react';
import {AutoScene} from '../components/auto';

export const Kind: React.FC = () => <AutoScene k="kind" d={{"tag": "考点二", "title": "放热反应与吸热反应", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "放热反应 ΔH < 0", "at": "k1", "lines": ["燃烧", "中和反应", "活泼金属与酸、水", "大多数化合反应", "铝热反应"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "吸热反应 ΔH > 0", "at": "k2", "lines": ["大多数分解反应", "Ba(OH)2·8H2O + NH4Cl", "C + CO2", "C + H2O(g)"], "c": "orange", "size": 32}]}]}, {"t": "text", "at": "k3", "text": "浓硫酸稀释、NaOH 溶于水：放热，但属于{物理变化}", "size": 32}], "callout": {"label": "易错", "at": "k4", "text": "是否吸热与{是否需要加热无关}"}, "beat": {"k": "warm", "at": "k3b", "text": "放热反应\n能量{交给环境|red}，周围变暖"}}} />;
