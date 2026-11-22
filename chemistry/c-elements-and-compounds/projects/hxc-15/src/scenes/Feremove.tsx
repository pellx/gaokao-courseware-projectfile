import React from 'react';
import {AutoScene} from '../components/auto';

export const Feremove: React.FC = () => <AutoScene k="fe" d={{"tag": "考点五", "title": "流程中的除铁", "blocks": [{"t": "chain", "steps": [{"at": "fr1", "text": "含 Fe^2+ 的\n浸出液"}, {"at": "fr1", "text": "加 {H2O2}\nFe^2+ → Fe^3+", "c": "red"}, {"at": "fr2", "text": "调 pH ≈ 3～4\nFe(OH)3↓", "c": "orange"}, {"at": "fr2", "text": "过滤", "c": "green"}], "arrows": [], "center": true, "size": 32}, {"t": "rule", "tag": "原因", "at": "fr3", "text": "Fe(OH)2 的沉淀 pH 与 Cu(OH)2 等{接近|orange}，Fe(OH)3 在低 pH 就沉淀完全", "c": "brown", "size": 30}], "callout": {"label": "答题模板", "at": "fr4", "text": "加 H2O2：{将 Fe^2+ 氧化为 Fe^3+，便于调 pH 除去}"}}} />;
