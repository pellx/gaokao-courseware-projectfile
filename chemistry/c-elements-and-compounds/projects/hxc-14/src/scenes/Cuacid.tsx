import React from 'react';
import {AutoScene} from '../components/auto';

export const Cuacid: React.FC = () => <AutoScene k="cuacid" d={{"tag": "考点二", "title": "铜与氧化性酸", "blocks": [{"t": "rule", "tag": "浓硫酸", "at": "ca1", "text": "Cu + 2H2SO4(浓) ═△═ CuSO4 + {SO2↑} + 2H2O", "c": "red", "size": 30}, {"t": "rule", "tag": "硝酸", "at": "ca1", "text": "浓 → {NO2}，稀 → {NO}", "c": "orange", "size": 30}, {"t": "big", "at": "ca2", "text": "Cu + H2O2 + H2SO4 = CuSO4 + 2H2O（{绿色溶铜|green}）", "size": 38}, {"t": "rule", "tag": "通空气", "at": "ca3", "text": "2Cu + O2 + 2H2SO4 ═△═ 2CuSO4 + 2H2O", "c": "green", "size": 30}], "callout": {"label": "考法", "at": "ca4", "text": "H2O2 溶铜的优点：{无污染性气体}，硫酸利用率高"}}} />;
