import React from 'react';
import {AutoScene} from '../components/auto';

export const Conc: React.FC = () => <AutoScene k="conc" d={{"tag": "考点七", "title": "膜两侧浓度变化", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "阴极室（氯碱）", "at": "cc2", "lines": ["生成 OH^-", "Na^+ {迁入}", "NaOH 浓度{增大}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "阳极室（氯碱）", "at": "cc3", "lines": ["Cl^- 放电减少", "Na^+ {迁出|orange}", "NaCl 浓度{减小|orange}"], "c": "orange", "size": 32}]}]}], "callout": {"label": "解题方法", "at": "cc4", "text": "变化 = {电极反应} + {离子迁移}"}, "beat": {"k": "dizzy", "at": "cc3b", "text": "别忘了\n{迁进、迁出的离子|red}"}}} />;
