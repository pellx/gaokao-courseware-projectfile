import React from 'react';
import {AutoScene} from '../components/auto';

export const Metal: React.FC = () => <AutoScene k="metal" d={{"tag": "考点四", "title": "金属材料与合金", "blocks": [{"t": "big", "at": "me2", "text": "合金：硬度{大}，熔点{低}", "size": 46}, {"t": "items", "items": [{"at": "me3", "text": "钛合金：航空航天、人造骨"}, {"at": "me3", "text": "铝锂合金：大飞机"}, {"at": "me3", "text": "储氢合金；不锈钢（Cr、Ni）"}], "size": 34}], "callout": {"label": "易错", "at": "me4", "text": "合金是{混合物}；熔点比纯金属低"}}} />;
