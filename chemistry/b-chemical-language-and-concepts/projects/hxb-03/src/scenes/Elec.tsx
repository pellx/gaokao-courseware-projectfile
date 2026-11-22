import React from 'react';
import {AutoScene} from '../components/auto';

export const Elec: React.FC = () => <AutoScene k="elec" d={{"tag": "考点一", "title": "电解质与非电解质", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "电解质", "at": "el1", "lines": ["水溶液{或}熔融状态下能导电的{化合物}", "酸、碱、盐、金属氧化物、H2O"], "c": "red"}]}, {"blocks": [{"t": "panel", "title": "非电解质", "at": "el2", "lines": ["两种状态下都不导电的{化合物}", "蔗糖、酒精、CO2、SO2、NH3"], "c": "orange"}]}]}, {"t": "big", "at": "el3", "text": "CO2 溶于水导电 ← 靠的是 {H2CO3} 电离，所以 CO2 是{非电解质}", "size": 34}], "callout": {"label": "易错", "at": "el4", "text": "单质（Cu、石墨）和混合物（NaCl 溶液、盐酸）：{既不是电解质也不是非电解质}"}}} />;
