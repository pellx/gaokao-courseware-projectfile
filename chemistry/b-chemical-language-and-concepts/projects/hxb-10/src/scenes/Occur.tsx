import React from 'react';
import {AutoScene} from '../components/auto';

export const Occur: React.FC = () => <AutoScene k="react" d={{"tag": "考点二", "title": "一查：反应能否发生、产物对不对", "blocks": [{"t": "mark", "ok": false, "at": "re1", "text": "CO2 + CaCl2 + H2O = CaCO3↓ + 2HCl（{不反应}）", "size": 31}, {"t": "mark", "ok": false, "at": "re2", "text": "2Fe + 6H^+ = 2Fe^3+ + 3H2↑（应生成 {Fe^2+}）", "size": 31}, {"t": "mark", "ok": false, "at": "re3", "text": "Fe + 2H^+（稀 HNO3）= Fe^2+ + H2↑（应生成 {NO}）", "size": 31}, {"t": "mark", "ok": true, "at": "re3", "text": "2Fe(OH)3 + 6H^+ + 2I^- = 2Fe^2+ + I2 + 6H2O", "size": 31}], "callout": {"label": "易错", "at": "re4", "text": "先问“{真的会这样反应吗}”，再看配平"}, "beat": {"k": "deadpan", "at": "re3b", "text": "写得再工整\n{反应不发生|red}\n就是不相符"}}} />;
