import React from 'react';
import {AutoScene} from '../components/auto';

export const Operation: React.FC = () => <AutoScene k="operation" d={{"tag": "考点八", "title": "基本操作规范", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "微热法", "at": "op1", "lines": ["导管入水，微热", "有气泡 → 冷却后{形成水柱}"], "c": "red", "size": 31}]}, {"blocks": [{"t": "panel", "title": "液差法", "at": "op2", "lines": ["关闭止水夹，加水", "形成{稳定液面差}"], "c": "orange", "size": 31}]}]}, {"t": "text", "at": "op3", "text": "pH 试纸{不润湿}；焰色试验铂丝用{盐酸}洗净", "size": 32, "center": true}], "callout": {"label": "答题模板", "at": "op4", "text": "写全{操作、现象、结论}"}}} />;
