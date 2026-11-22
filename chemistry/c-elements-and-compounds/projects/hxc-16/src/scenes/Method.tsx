import React from 'react';
import {AutoScene} from '../components/auto';

export const Method: React.FC = () => <AutoScene k="method" d={{"tag": "考点七", "title": "元素化合物选择题的解题方法", "blocks": [{"t": "chain", "steps": [{"at": "me2", "text": "① 定价态\n氧化还原？", "c": "red"}, {"at": "me3", "text": "② 看类别\n通性", "c": "orange"}, {"at": "me3", "text": "③ 看条件与用量\n浓稀、加热、少量过量", "c": "green"}], "arrows": [], "center": true, "size": 34}, {"t": "text", "at": "me4", "text": "再用{颜色速查}和{性质用途}两张表核对", "size": 34, "center": true}], "callout": {"label": "解题方法", "at": "me4", "text": "{定价态 → 看类别 → 看条件与用量}"}, "beat": {"k": "yui", "at": "me3b", "text": "三把钥匙\n{价态、类别、条件|red}"}}} />;
