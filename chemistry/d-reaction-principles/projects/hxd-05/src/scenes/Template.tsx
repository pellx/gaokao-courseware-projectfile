import React from 'react';
import {AutoScene} from '../components/auto';

export const Template: React.FC = () => <AutoScene k="tpl" d={{"tag": "考点八", "title": "平衡移动答题模板", "blocks": [{"t": "chain", "steps": [{"at": "tp1", "text": "写出平衡"}, {"at": "tp2", "text": "条件 → 浓度变化"}, {"at": "tp2", "text": "移动方向"}, {"at": "tp3", "text": "{现象或结果}"}], "arrows": [], "center": true, "size": 34}, {"t": "panel", "title": "例", "at": "tp3", "lines": ["加入 NaOH，c(H^+) {减小}", "Cr2O7^2- + H2O ⇌ 2CrO4^2- + 2H^+ {正向移动}", "溶液由{橙色变为黄色}"], "c": "orange", "size": 31}], "callout": {"label": "答题模板", "at": "tp4", "text": "四步写全，{只写“平衡移动”不得分}"}}} />;
