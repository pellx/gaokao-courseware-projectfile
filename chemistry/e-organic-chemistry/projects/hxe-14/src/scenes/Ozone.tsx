import React from 'react';
import {AutoScene} from '../components/auto';

export const Ozone: React.FC = () => <AutoScene k="ozone" d={{"tag": "考点四", "title": "烯烃的臭氧氧化", "blocks": [{"t": "big", "at": "oz2", "text": "(CH3)2C=CHCH3 →(O3；Zn/H2O) {CH3COCH3 + CH3CHO}", "size": 36}, {"t": "rule", "tag": "反推", "at": "oz3", "text": "两个 C=O 的碳{连起来} → C=C", "c": "orange", "size": 32}], "callout": {"label": "解题方法", "at": "oz4", "text": "环烯：{开环}，一个分子两端各一个 C=O"}, "beat": {"k": "cat", "at": "oz3b", "text": "O3 把双键\n{一刀切成两半|red}"}}} />;
