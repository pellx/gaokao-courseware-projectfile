import React from 'react';
import {AutoScene} from '../components/auto';

export const Acidic: React.FC = () => <AutoScene k="acidic" d={{"tag": "考点五", "title": "酸式盐溶液的酸碱性", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "水解 > 电离：碱性", "at": "ac2", "lines": ["NaHCO3", "NaHS"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "电离 > 水解：酸性", "at": "ac3", "lines": ["NaHSO3", "NaH2PO4"], "c": "orange", "size": 34}]}]}, {"t": "big", "at": "ac4", "text": "比较 {K_a2} 与 K_h = K_w / K_a1", "size": 40}], "callout": {"label": "解题方法", "at": "ac4", "text": "{K_a2 > K_h} → 酸性；NaHSO4 完全电离"}}} />;
