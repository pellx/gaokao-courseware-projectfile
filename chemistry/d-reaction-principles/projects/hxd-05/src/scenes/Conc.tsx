import React from 'react';
import {AutoScene} from '../components/auto';

export const Conc: React.FC = () => <AutoScene k="conc" d={{"tag": "考点三", "title": "浓度的影响", "blocks": [{"t": "big", "at": "cn1", "text": "增大反应物浓度 → {正向移动}", "size": 42}, {"t": "panel", "title": "Fe^3+ + 3SCN^- ⇌ Fe(SCN)3（红色）", "at": "cn2", "lines": ["加 KSCN：红色{加深}", "加铁粉：红色{变浅|orange}"], "c": "red", "size": 31}, {"t": "panel", "title": "Cr2O7^2-（橙）+ H2O ⇌ 2CrO4^2-（黄）+ 2H^+", "at": "cn3", "lines": ["加 NaOH：变{黄|orange}", "加硫酸：变{橙}"], "c": "orange", "size": 31}], "callout": {"label": "易错", "at": "cn4", "text": "加 KCl 固体：{不参加反应}，平衡不移动"}}} />;
