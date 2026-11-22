import React from 'react';
import {AutoScene} from '../components/auto';

export const Sofour: React.FC = () => <AutoScene k="so4" d={{"tag": "考点四", "title": "SO4^2- 的检验", "blocks": [{"t": "chain", "steps": [{"at": "s41", "text": "待测液"}, {"at": "s41", "text": "稀盐酸\n{无现象}", "c": "orange"}, {"at": "s41", "text": "BaCl2 溶液\n{白色沉淀}", "c": "red"}], "arrows": [], "center": true, "size": 38}, {"t": "rule", "tag": "先加盐酸", "at": "s42", "text": "排除 Ag^+、CO3^2-、SO3^2- 干扰", "c": "orange", "size": 32}, {"t": "mark", "ok": false, "at": "s43", "text": "用稀 HNO3 酸化（会把 SO3^2- 氧化成 SO4^2-）", "size": 32}], "callout": {"label": "答题模板", "at": "s44", "text": "先加足量稀盐酸无现象，再加 BaCl2，{产生白色沉淀}"}}} />;
