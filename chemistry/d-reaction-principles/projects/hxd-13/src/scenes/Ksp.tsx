import React from 'react';
import {AutoScene} from '../components/auto';

export const Ksp: React.FC = () => <AutoScene k="ksp" d={{"tag": "考点二", "title": "溶度积 K_sp", "blocks": [{"t": "items", "items": [{"at": "ks1", "text": "AgCl：K_sp = {c(Ag^+)·c(Cl^-)}"}, {"at": "ks1", "text": "Ag2CrO4：K_sp = {c²(Ag^+)·c(CrO4^2-)}"}, {"at": "ks2", "text": "Fe(OH)3：K_sp = c(Fe^3+)·{c³(OH^-)}"}], "size": 34}, {"t": "big", "at": "ks3", "text": "K_sp 只与{温度}有关", "size": 44}], "callout": {"label": "易错", "at": "ks4", "text": "加 NaCl：c(Ag^+) 减小，{K_sp 不变}"}}} />;
