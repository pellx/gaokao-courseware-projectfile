import React from 'react';
import {AutoScene} from '../components/auto';

export const Alloy: React.FC = () => <AutoScene k="alloy" d={{"tag": "考点一", "title": "合金的特点", "blocks": [{"t": "big", "at": "al1", "text": "合金 = 金属 + 其他金属或非金属，{熔合}而成（{混合物}）", "size": 38}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "硬度", "at": "al2", "text": "一般比成分金属{大}", "c": "red", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "熔点", "at": "al2", "text": "一般比成分金属{低|orange}", "c": "orange", "size": 34}]}]}, {"t": "rule", "tag": "原因", "at": "al3", "text": "原子排列被{打乱}，层间不易滑动", "c": "brown", "size": 31}], "callout": {"label": "易错", "at": "al4", "text": "合金是{混合物}；熔点一般{更低}"}, "beat": {"k": "fused", "at": "al2b", "text": "不同成分熔合\n{性能更好|red}"}}} />;
