import React from 'react';
import {AutoScene} from '../components/auto';

export const Micro: React.FC = () => <AutoScene k="micro" d={{"tag": "考点三", "title": "微观量的关系", "blocks": [{"t": "big", "at": "m1", "text": "m_0 = {M / N_A}", "size": 52}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "固体、液体", "at": "m2", "text": "V_mol / N_A ≈ {一个分子的体积}", "c": "red", "size": 30}]}, {"blocks": [{"t": "rule", "tag": "气体", "at": "m3", "text": "V_mol / N_A = {每个分子平均占有的空间|orange}", "c": "orange", "size": 30}]}]}, {"t": "text", "at": "m4", "text": "n = m / M　　N = n N_A", "size": 34}], "callout": {"label": "易错", "at": "m5", "text": "气体：V_mol / N_A {不是分子本身的体积}"}}} />;
