import React from 'react';
import {AutoScene} from '../components/auto';

export const Mass: React.FC = () => <AutoScene k="mass" d={{"tag": "考点三", "title": "物料守恒", "blocks": [{"t": "big", "at": "ma1", "text": "某元素各种存在形式之和 = {总量}", "size": 44}, {"t": "items", "items": [{"at": "ma2", "text": "Na2CO3：c(Na^+) = {2}[c(CO3^2-) + c(HCO3^-) + c(H2CO3)]"}, {"at": "ma3", "text": "CH3COOH 与 CH3COONa 等浓度混合：{2}c(Na^+) = c(CH3COO^-) + c(CH3COOH)"}], "size": 31}], "callout": {"label": "易错", "at": "ma4", "text": "含碳粒子写全{三种}；系数看{原子个数比}"}, "beat": {"k": "row", "at": "ma3b", "text": "换了造型\n{一个都不少|red}"}}} />;
