import React from 'react';
import {AutoScene} from '../components/auto';

export const Norm: React.FC = () => <AutoScene k="norm" d={{"tag": "考点七", "title": "答题规范", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": true, "at": "no1", "text": "22.40 mL", "size": 36}]}, {"blocks": [{"t": "mark", "ok": false, "at": "no1", "text": "22.4 mL", "size": 36}]}]}, {"t": "rule", "tag": "平行实验", "at": "no2", "text": "舍去{误差明显大}的数据，再求平均值", "c": "orange", "size": 32}, {"t": "rule", "tag": "表达式", "at": "no3", "text": "可不化简，但{比例、倍数、10^-3} 不能少", "c": "red", "size": 32}], "callout": {"label": "答题模板", "at": "no4", "text": "读数{两位小数}；舍去离群数据；表达式写全"}, "beat": {"k": "peace", "at": "no3b", "text": "写全、写对\n{稳稳拿分|red}"}}} />;
