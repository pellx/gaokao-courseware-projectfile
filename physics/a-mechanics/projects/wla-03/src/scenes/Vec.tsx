import React from 'react';
import {AutoScene} from '../components/auto';

export const Vec: React.FC = () => <AutoScene k="vec" d={{"tag": "考点五", "title": "公式的矢量性", "blocks": [{"t": "rule", "tag": "先做", "at": "z2", "text": "规定{正方向}：通常取 v_0 的方向", "c": "red", "size": 36}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "匀加速", "at": "z3", "lines": ["v_0 > 0", "a {> 0}"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "匀减速", "at": "z3", "lines": ["v_0 > 0", "a {< 0|orange}"], "c": "orange", "size": 34}]}]}, {"t": "text", "at": "z1", "text": "v_0、v、a、x 都是{矢量}", "size": 32}], "callout": {"label": "易错", "at": "z4", "text": "负号表示{方向}，不表示数值小"}, "beat": {"k": "brake", "at": "z3b", "text": "向前为正：v {> 0|red}\n刹车：a {< 0|orange}"}}} />;
