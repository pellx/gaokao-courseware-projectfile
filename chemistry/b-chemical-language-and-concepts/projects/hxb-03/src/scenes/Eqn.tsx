import React from 'react';
import {AutoScene} from '../components/auto';

export const Eqn: React.FC = () => <AutoScene k="eqn" d={{"tag": "考点三", "title": "电离方程式", "blocks": [{"t": "big", "at": "eq1", "text": "NaCl = Na^+ + Cl^-　　Ba(OH)2 = Ba^2+ + 2OH^-", "size": 40}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "NaHSO4 在水中", "at": "eq2", "lines": ["= Na^+ + {H^+} + {SO4^2-}"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "NaHSO4 熔融", "at": "eq3", "lines": ["= Na^+ + {HSO4^-|orange}"], "c": "orange", "size": 34}]}]}, {"t": "big", "at": "eq4", "text": "NaHCO3 = Na^+ + {HCO3^-}（不拆）", "size": 38}], "callout": {"label": "易错", "at": "eq5", "text": "电离{不需要通电}；原子守恒、电荷守恒"}, "beat": {"k": "split", "at": "eq1b", "text": "拽开\n= {电离|red}\n化合物拆成自由的离子"}}} />;
