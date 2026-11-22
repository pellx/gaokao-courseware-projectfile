import React from 'react';
import {AutoScene} from '../components/auto';

export const Resolve: React.FC = () => <AutoScene k="resolve" d={{"tag": "考点五", "title": "力的分解", "blocks": [{"t": "rule", "tag": "分解", "at": "e1", "text": "合成的{逆运算}，遵从平行四边形定则", "c": "red"}, {"t": "chain", "steps": [{"at": "e2", "text": "已知力作{对角线}"}, {"at": "e2", "text": "作平行四边形"}, {"at": "e2", "text": "两邻边是{分力}"}], "arrows": []}, {"t": "text", "at": "e3", "text": "同一条对角线 → {无数个}平行四边形", "size": 32}], "callout": {"label": "要点", "at": "e4", "text": "不加限制：一个力可分解为{无数对}分力"}}} />;
