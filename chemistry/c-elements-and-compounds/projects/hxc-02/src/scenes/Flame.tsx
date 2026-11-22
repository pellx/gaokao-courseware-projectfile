import React from 'react';
import {AutoScene} from '../components/auto';

export const Flame: React.FC = () => <AutoScene k="flame" d={{"tag": "考点六", "title": "焰色试验", "blocks": [{"t": "chain", "steps": [{"at": "fl2", "text": "铂丝蘸{盐酸}\n灼烧至无色", "c": "red"}, {"at": "fl2", "text": "蘸取试样\n灼烧"}, {"at": "fl3", "text": "观察\n火焰颜色", "c": "orange"}], "arrows": [], "center": true, "size": 34}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "钠", "at": "fl3", "text": "{黄色|orange}", "c": "orange", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "钾", "at": "fl3", "text": "{紫色}（透过蓝色钴玻璃）", "c": "red", "size": 34}]}]}], "callout": {"label": "易错", "at": "fl4", "text": "焰色试验是{物理变化}；检验的是{元素}"}, "beat": {"k": "flame", "at": "fl3b", "text": "钠的焰色\n{明亮的黄色|orange}"}}} />;
