import React from 'react';
import {AutoScene} from '../components/auto';

export const Point: React.FC = () => <AutoScene k="point" d={{"tag": "考点六", "title": "点电荷", "blocks": [{"t": "rule", "tag": "条件", "at": "p1", "text": "形状、大小、电荷分布的影响{可以忽略}", "c": "red", "size": 32}, {"t": "big", "at": "p2", "text": "{理想化模型}，类似{质点|orange}", "size": 44}], "callout": {"label": "易错", "at": "p3", "text": "看影响能否忽略，{不只看大小}"}, "beat": {"k": "a2", "at": "p2b", "text": "离得够远\n就能看成{一个点|red}"}}} />;
