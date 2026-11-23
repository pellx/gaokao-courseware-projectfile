import React from 'react';
import {AutoScene} from '../components/auto';

export const Count: React.FC = () => <AutoScene k="count" d={{"tag": "考点五", "title": "计数点的选取", "blocks": [{"t": "items", "items": [{"at": "c1", "text": "舍去开头{过于密集}的点"}, {"at": "c2", "text": "从{清晰}的点开始取计数点"}], "size": 32}, {"t": "big", "at": "c3", "text": "T = 5 × 0.02 s = {0.1 s}", "size": 48}], "callout": {"label": "易错", "at": "c4", "text": "每 5 个点取一个 = 中间还有 {4 个点}，T = 0.1 s"}, "beat": {"k": "onigiri", "at": "c3b", "text": "五个一组\n{T = 0.1 s|red}"}}} />;
