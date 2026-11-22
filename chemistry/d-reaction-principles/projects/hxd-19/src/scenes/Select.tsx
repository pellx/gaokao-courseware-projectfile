import React from 'react';
import {AutoScene} from '../components/auto';

export const Select: React.FC = () => <AutoScene k="select" d={{"tag": "考点六", "title": "选择性与竞争反应", "blocks": [{"t": "big", "at": "se2", "text": "选择性 = {生成目标产物消耗的反应物 ÷ 反应物总消耗量}", "size": 36}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "转化率", "at": "se2", "text": "反应物{消耗了多少}", "c": "red", "size": 31}]}, {"blocks": [{"t": "rule", "tag": "选择性", "at": "se2", "text": "消耗的有多少{变成目标产物|orange}", "c": "orange", "size": 31}]}]}, {"t": "text", "at": "se3", "text": "提高选择性：{合适的催化剂}、合适的温度", "size": 32, "center": true}], "callout": {"label": "易错", "at": "se4", "text": "升温副反应加快更多：{选择性下降}"}, "beat": {"k": "keys", "at": "se3b", "text": "好几条路\n{催化剂帮你选|red}"}}} />;
