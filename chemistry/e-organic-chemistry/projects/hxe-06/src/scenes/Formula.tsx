import React from 'react';
import {AutoScene} from '../components/auto';

export const Formula: React.FC = () => <AutoScene k="formula" d={{"tag": "考点五", "title": "实验式与分子式", "blocks": [{"t": "panel", "title": "例", "at": "fo2", "lines": ["C 52.2%、H 13.0%、O 34.8%", "n(C) : n(H) : n(O) = 2 : 6 : 1", "实验式 {C2H6O}"], "c": "orange", "size": 32}, {"t": "rule", "tag": "质谱", "at": "fo3", "text": "{最大质荷比} = 相对分子质量 = 46 → C2H6O", "c": "red", "size": 32}], "callout": {"label": "易错", "at": "fo4", "text": "看{最右边}的峰，不是最高的峰"}}} />;
