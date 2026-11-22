import React from 'react';
import {AutoScene} from '../components/auto';

export const Oxid: React.FC = () => <AutoScene k="oxid" d={{"tag": "考点二", "title": "浓硫酸的强氧化性", "blocks": [{"t": "big", "at": "ox1", "text": "Cu + 2H2SO4(浓) ═△═ CuSO4 + SO2↑ + 2H2O", "size": 38}, {"t": "text", "at": "ox2", "text": "体现：{氧化性}（→ SO2）+ {酸性|orange}（→ CuSO4）", "size": 32, "center": true}, {"t": "big", "at": "ox3", "text": "C + 2H2SO4(浓) ═△═ CO2↑ + 2SO2↑ + 2H2O", "size": 38, "c": "orange", "soft": "orangeSoft"}, {"t": "rule", "tag": "钝化", "at": "ox4", "text": "常温下使 {Fe、Al} 钝化：铁罐、铝罐储运", "c": "green", "size": 31}], "callout": {"label": "易错", "at": "ox5", "text": "浓硫酸变稀后与 Cu {不再反应}：H2SO4 不能完全反应"}}} />;
