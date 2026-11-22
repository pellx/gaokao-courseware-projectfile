import React from 'react';
import {AutoScene} from '../components/auto';

export const Hess: React.FC = () => <AutoScene k="hess" d={{"tag": "考点一", "title": "盖斯定律", "blocks": [{"t": "rule", "tag": "内容", "at": "he1", "text": "反应热只与{始态和终态}有关，与{途径|orange}无关", "c": "red", "size": 34}, {"t": "chain", "steps": [{"at": "he3", "text": "A"}, {"at": "he3", "text": "B"}, {"at": "he3", "text": "C"}], "arrows": ["ΔH1", "ΔH2"], "center": true, "size": 44}, {"t": "big", "at": "he3", "text": "A → C：ΔH = {ΔH1 + ΔH2}", "size": 44}], "callout": {"label": "考法", "at": "he4", "text": "选择题：能量图、循环图找 ΔH 关系；大题：{盖斯定律求 ΔH}"}, "beat": {"k": "wall", "at": "he3b", "text": "路线不同，起点终点相同\n{ΔH 相同|red}"}}} />;
