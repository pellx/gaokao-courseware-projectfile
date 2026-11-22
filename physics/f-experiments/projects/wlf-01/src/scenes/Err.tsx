import React from 'react';
import {AutoScene} from '../components/auto';

export const Err: React.FC = () => <AutoScene k="err" d={{"tag": "考点二", "title": "误差与错误", "blocks": [{"t": "rule", "tag": "误差", "at": "b1", "text": "测量值与真实值之间的{差异}", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "误差", "at": "b2", "lines": ["不可避免", "只能{尽量减小}"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "错误", "at": "b3", "lines": ["读错、记错、操作失误", "{应当避免}"], "c": "red", "size": 32}]}]}], "callout": {"label": "易错", "at": "b4", "text": "误差不能消除；错误必须避免，错误数据{舍去}"}, "beat": {"k": "sleep", "at": "b3b", "text": "迷糊读错数\n是{错误|red}，不是误差"}}} />;
