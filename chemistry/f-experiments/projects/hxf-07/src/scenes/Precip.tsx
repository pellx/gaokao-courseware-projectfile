import React from 'react';
import {AutoScene} from '../components/auto';

export const Precip: React.FC = () => <AutoScene k="precip" d={{"tag": "考点四", "title": "陷阱三：沉淀不一定是某物质", "blocks": [{"t": "mark", "ok": true, "at": "pc1", "text": "SO2 通入 BaCl2 溶液：{无沉淀}", "size": 32}, {"t": "mark", "ok": true, "at": "pc2", "text": "SO2 通入 Ba(NO3)2 溶液：{BaSO4} 白色沉淀", "size": 32}, {"t": "text", "at": "pc3", "text": "加 NaOH 得白色沉淀：Mg(OH)2、Al(OH)3 都可能", "size": 31, "center": true}], "callout": {"label": "解题方法", "at": "pc4", "text": "想到{氧化还原}可能改变产物"}, "beat": {"k": "berry", "at": "pc3b", "text": "看着像就是？\n{要剥开看看|red}"}}} />;
