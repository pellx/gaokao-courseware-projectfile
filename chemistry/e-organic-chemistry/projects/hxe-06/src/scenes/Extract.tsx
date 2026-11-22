import React from 'react';
import {AutoScene} from '../components/auto';

export const Extract: React.FC = () => <AutoScene k="extract" d={{"tag": "考点三", "title": "萃取与分液", "blocks": [{"t": "rule", "tag": "萃取剂", "at": "ex2", "text": "与原溶剂{互不相溶}、溶解度更大、不反应", "c": "red", "size": 31}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "下层", "at": "ex3", "text": "{下口放出}：CCl4 层", "c": "red", "size": 31}]}, {"blocks": [{"t": "rule", "tag": "上层", "at": "ex3", "text": "{上口倒出|orange}：苯层", "c": "orange", "size": 31}]}]}], "callout": {"label": "易错", "at": "ex4", "text": "{乙醇与水互溶}，不能作萃取剂"}, "beat": {"k": "shy", "at": "ex3b", "text": "互不相溶\n{分成两层|red}"}}} />;
