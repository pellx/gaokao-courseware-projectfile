import React from 'react';
import {AutoScene} from '../components/auto';

export const Agredox: React.FC = () => <AutoScene k="agredox" d={{"tag": "考点六", "title": "银的氧化还原", "blocks": [{"t": "big", "at": "ar1", "text": "Fe^2+ + Ag^+ ⇌ Fe^3+ + Ag（{可逆}）", "size": 44}, {"t": "text", "at": "ar2", "text": "浓度改变 → {反应方向改变|orange}", "size": 34, "center": true}, {"t": "rule", "tag": "洗银镜", "at": "ar3", "text": "3Ag + 4HNO3(稀) = 3AgNO3 + NO↑ + 2H2O", "c": "red", "size": 31}], "callout": {"label": "易错", "at": "ar4", "text": "Ag 不溶于稀盐酸、稀硫酸，用{稀硝酸}溶解"}, "beat": {"k": "white", "at": "ar2b", "text": "银和铁的反应\n{正着反着都能来|red}"}}} />;
