import React from 'react';
import {AutoScene} from '../components/auto';

export const Extract: React.FC = () => <AutoScene k="extract" d={{"tag": "考点四", "title": "萃取与分液", "blocks": [{"t": "rule", "tag": "萃取剂", "at": "ex1", "text": "与原溶剂{互不相溶}、溶解度更大、不反应", "c": "red", "size": 31}, {"t": "text", "at": "ex2", "text": "CCl4 萃取碘水：{下层紫红色}；苯：上层紫红色", "size": 32, "center": true}, {"t": "rule", "tag": "分液", "at": "ex3", "text": "下层{下口放出}，上层{上口倒出}", "c": "orange", "size": 31}], "callout": {"label": "易错", "at": "ex4", "text": "{乙醇不能作萃取剂}"}}} />;
