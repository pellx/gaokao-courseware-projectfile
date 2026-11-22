import React from 'react';
import {AutoScene} from '../components/auto';

export const Bleach: React.FC = () => <AutoScene k="bleach" d={{"tag": "考点六", "title": "漂白液与漂白粉", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "漂白液", "at": "bl1", "lines": ["Cl2 + 2NaOH = NaCl + {NaClO} + H2O", "有效成分：{NaClO}"], "c": "red", "size": 30}]}, {"blocks": [{"t": "panel", "title": "漂白粉", "at": "bl2", "lines": ["2Cl2 + 2Ca(OH)2 = CaCl2 + Ca(ClO)2 + 2H2O", "有效成分：{Ca(ClO)2}"], "c": "orange", "size": 30}]}]}, {"t": "big", "at": "bl3", "text": "失效：Ca(ClO)2 + CO2 + H2O = CaCO3↓ + 2HClO　→　2HClO ═光照═ 2HCl + O2↑", "size": 30}], "callout": {"label": "易错", "at": "bl4", "text": "漂白粉是{混合物}；能生成 HClO 说明酸性 H2CO3 > HClO"}}} />;
