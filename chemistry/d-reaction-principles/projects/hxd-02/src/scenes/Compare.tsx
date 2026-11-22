import React from 'react';
import {AutoScene} from '../components/auto';

export const Compare: React.FC = () => <AutoScene k="compare" d={{"tag": "考点五", "title": "ΔH 大小比较", "blocks": [{"t": "big", "at": "cp1", "text": "放热越多，ΔH {越小}（越负）", "size": 42}, {"t": "items", "items": [{"at": "cp2", "text": "能量：气态 > 液态 > 固态"}, {"at": "cp2", "text": "生成 H2O(l) 放热更多：ΔH(l) {<} ΔH(g)"}, {"at": "cp3", "text": "生成 CO2 放热更多：ΔH(CO2) {<} ΔH(CO)"}], "size": 33}], "callout": {"label": "易错", "at": "cp4", "text": "比“放出热量”看绝对值；比“ΔH”{带负号}"}}} />;
