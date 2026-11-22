import React from 'react';
import {AutoScene} from '../components/auto';

export const Neutral: React.FC = () => <AutoScene k="neutral" d={{"tag": "考点七", "title": "中和反应反应热的测定", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "装置", "at": "n1", "lines": ["内筒、外壳、隔热层、杯盖", "{玻璃搅拌器}、温度计"], "c": "orange", "size": 31}]}, {"blocks": [{"t": "panel", "title": "操作", "at": "n2", "lines": ["50 mL 0.50 mol/L 盐酸", "50 mL 0.55 mol/L NaOH（{稍过量}）", {"at": "n3", "text": "记录{最高温度}，重复 3 次"}], "c": "red", "size": 31}]}]}, {"t": "big", "at": "n4", "text": "强酸强碱稀溶液：生成 1 mol H2O(l) 放热约 {57.3 kJ}", "size": 38}], "callout": {"label": "易错", "at": "n5", "text": "弱酸弱碱 → {偏小}；浓硫酸 → {偏大}；分次加入、铜丝搅拌 → 偏小"}}} />;
