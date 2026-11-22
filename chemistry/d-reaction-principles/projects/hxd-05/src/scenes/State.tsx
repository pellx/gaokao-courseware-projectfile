import React from 'react';
import {AutoScene} from '../components/auto';

export const State: React.FC = () => <AutoScene k="state" d={{"tag": "考点一", "title": "平衡状态的特征", "blocks": [{"t": "rule", "tag": "可逆反应", "at": "st1", "text": "同一条件下双向进行，{不能完全转化}", "c": "red", "size": 32}, {"t": "big", "at": "st2", "text": "v(正) = v(逆) ≠ 0，各组分浓度{不变}", "size": 42}, {"t": "chain", "steps": [{"at": "st3", "text": "逆"}, {"at": "st3", "text": "等"}, {"at": "st3", "text": "{动}"}, {"at": "st3", "text": "定"}, {"at": "st3", "text": "变"}], "arrows": [], "center": true, "size": 40}], "callout": {"label": "易错", "at": "st4", "text": "浓度{不变} ≠ 浓度相等 ≠ 等于计量数之比"}, "beat": {"k": "pair", "at": "st3b", "text": "看起来不动\n其实{正逆反应一样快|red}"}}} />;
