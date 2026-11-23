import React from 'react';
import {AutoScene} from '../components/auto';

export const Micro: React.FC = () => <AutoScene k="micro" d={{"tag": "考点四", "title": "电流的微观表达式", "blocks": [{"t": "big", "at": "m1", "text": "I = {nqSv}", "size": 60}, {"t": "items", "items": [{"at": "m2", "text": "n：单位体积内的{自由电荷数}"}, {"at": "m2", "text": "v：定向移动的{平均速率}（金属中很小）"}], "size": 31}], "callout": {"label": "易错", "at": "m3", "text": "传得快的是{电场}，不是电子"}, "beat": {"k": "a2", "at": "m2b", "text": "电子定向移动\n{很慢|red}"}}} />;
