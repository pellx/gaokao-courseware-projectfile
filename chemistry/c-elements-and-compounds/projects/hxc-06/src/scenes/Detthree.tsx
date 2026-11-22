import React from 'react';
import {AutoScene} from '../components/auto';

export const Detthree: React.FC = () => <AutoScene k="det3" d={{"tag": "考点三", "title": "Fe^3+ 的检验", "blocks": [{"t": "big", "at": "d31", "text": "Fe^3+ + KSCN → 溶液变{红色}", "size": 44}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "本质", "at": "d32", "text": "生成红色{配合物}，不是沉淀", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "另一方法", "at": "d33", "text": "NaOH → {红褐色沉淀|orange}", "c": "orange", "size": 32}]}]}, {"t": "big", "at": "d32", "text": "Fe^3+ + 3SCN^- ⇌ {Fe(SCN)3}（红色，可溶）", "size": 40, "c": "orange", "soft": "orangeSoft"}], "callout": {"label": "易错", "at": "d34", "text": "KSCN 检验 Fe^3+：{溶液变红}，不是红色沉淀"}, "beat": {"k": "red", "at": "d32b", "text": "KSCN 一碰 Fe^3+\n{溶液变红|red}"}}} />;
