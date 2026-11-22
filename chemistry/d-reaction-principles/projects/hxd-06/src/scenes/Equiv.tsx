import React from 'react';
import {AutoScene} from '../components/auto';

export const Equiv: React.FC = () => <AutoScene k="equiv" d={{"tag": "考点八", "title": "等效平衡", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "恒温恒容", "at": "eqv1", "text": "换算后{物质的量相同}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "恒温恒压", "at": "eqv2", "text": "换算后{比例相同|orange}", "c": "orange", "size": 32}]}]}, {"t": "big", "at": "eqv3", "text": "1 mol N2 + 3 mol H2　≡　2 mol NH3（恒温恒容）", "size": 36}], "callout": {"label": "解题方法", "at": "eqv4", "text": "恒容投料加倍 → 相当于{加压}"}, "beat": {"k": "three", "at": "eqv2b", "text": "换算后相同\n{到达同一个平衡|red}"}}} />;
