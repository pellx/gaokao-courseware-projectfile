import React from 'react';
import {AutoScene} from '../components/auto';

export const Bond: React.FC = () => <AutoScene k="bond" d={{"tag": "考点四", "title": "用键能求 ΔH", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "断键", "at": "b1", "text": "{吸收|orange}能量", "c": "orange", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "成键", "at": "b1", "text": "{放出}能量", "c": "red", "size": 34}]}]}, {"t": "big", "at": "b2", "text": "ΔH = {反应物键能总和} − {生成物键能总和|orange}", "size": 42}, {"t": "panel", "title": "例", "at": "b3", "lines": ["H2 + Cl2 = 2HCl", "ΔH = 436 + 243 − 2×431 = {−183 kJ/mol}"], "c": "orange", "size": 32}], "callout": {"label": "解题方法", "at": "b4", "text": "先数键数：NH3 3 个 N—H，CH4 4 个 C—H；金刚石每个 C 平均 {2} 个，SiO2 每个 Si {4} 个 Si—O"}}} />;
