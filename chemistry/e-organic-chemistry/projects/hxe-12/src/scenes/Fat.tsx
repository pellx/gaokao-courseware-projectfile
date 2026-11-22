import React from 'react';
import {AutoScene} from '../components/auto';

export const Fat: React.FC = () => <AutoScene k="fat" d={{"tag": "考点六", "title": "油脂", "blocks": [{"t": "rule", "tag": "组成", "at": "fa1", "text": "{高级脂肪酸}与{甘油}形成的酯", "c": "red", "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "皂化", "at": "fa2", "text": "碱性水解 → {肥皂} + 甘油", "c": "red", "size": 31}]}, {"blocks": [{"t": "rule", "tag": "氢化", "at": "fa3", "text": "双键加 H2 → 固态{脂肪|orange}", "c": "orange", "size": 31}]}]}], "callout": {"label": "易错", "at": "fa4", "text": "油脂{不是高分子}"}, "beat": {"k": "bob", "at": "fa3b", "text": "油使溴水褪色\n含{碳碳双键|red}"}}} />;
