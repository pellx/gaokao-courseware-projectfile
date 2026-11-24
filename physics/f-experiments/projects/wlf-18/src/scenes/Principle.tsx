import React from 'react';
import {AutoScene} from '../components/auto';

export const Principle: React.FC = () => <AutoScene k="principle" d={{"tag": "考点二", "title": "实验原理", "blocks": [{"t": "chain", "steps": [{"at": "p1", "text": "磁场、光照"}, {"at": "p2", "text": "{传感器}"}, {"at": "p2", "text": "电学量 / 通断", "c": "orange"}, {"at": "p3", "text": "执行装置动作"}], "arrows": []}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "传感器", "at": "p1", "lines": ["干簧管", "光敏电阻"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "控制", "at": "p2", "lines": ["控制电路", "继电器"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "执行", "at": "p3", "lines": ["发光二极管、蜂鸣器", "灯"], "c": "red", "size": 32}]}]}], "callout": {"label": "要点", "at": "p4", "text": "感受 → 转换 → 控制 → {执行}"}}} />;
