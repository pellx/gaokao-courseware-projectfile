import React from 'react';
import {AutoScene} from '../components/auto';

export const Purity: React.FC = () => <AutoScene k="purity" d={{"tag": "考点五", "title": "纯度与含量的计算", "blocks": [{"t": "big", "at": "pu1", "text": "纯度 = {纯物质质量 ÷ 样品质量} × 100%", "size": 40}, {"t": "panel", "title": "例：c mol/L KMnO4 滴定 Fe^2+，消耗 V mL", "at": "pu2", "lines": ["n(Fe^2+) = 5cV × 10^-3 mol", "样品配成 250 mL，取 25.00 mL：再{乘 10}", "w(Fe) = 5cV × 10^-3 × 10 × 56 ÷ m × 100%"], "c": "orange", "size": 30}], "callout": {"label": "易错", "at": "pu4", "text": "别忘了{取样倍数}"}}} />;
