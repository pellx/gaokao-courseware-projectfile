import React from 'react';
import {AutoScene} from '../components/auto';

export const Chiral: React.FC = () => <AutoScene k="chiral" d={{"tag": "考点四", "title": "手性碳与对映异构", "blocks": [{"t": "big", "at": "ch1", "text": "手性碳：{连 4 个不同基团}的饱和碳", "size": 42}, {"t": "text", "at": "ch3", "text": "乳酸 CH3{C}H(OH)COOH：连 —CH3、—OH、—COOH、—H", "size": 33, "center": true}, {"t": "rule", "tag": "对映异构", "at": "ch2", "text": "互为{镜像}，不能重合", "c": "orange", "size": 32}], "callout": {"label": "易错", "at": "ch4", "text": "双键碳、苯环碳、—CH2—、—CH3 {不是手性碳}"}, "beat": {"k": "mirror", "at": "ch3b", "text": "互为{镜像|red}\n不能重合"}}} />;
