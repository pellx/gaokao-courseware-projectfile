import React from 'react';
import {AutoScene} from '../components/auto';

export const Object: React.FC = () => <AutoScene k="object" d={{"tag": "考点二", "title": "研究对象与方法", "blocks": [{"t": "rule", "tag": "研究对象", "at": "o1", "text": "注射器内{封闭的空气柱}", "c": "red"}, {"t": "rule", "tag": "方法", "at": "o2", "text": "{控制变量法}：m、T 不变", "c": "orange"}, {"t": "chain", "steps": [{"at": "o3", "text": "改变 V"}, {"at": "o3", "text": "测 p", "c": "orange"}, {"at": "o3", "text": "找 p 与 V 的关系"}], "arrows": []}], "callout": {"label": "要点", "at": "o4", "text": "研究对象：{封闭的空气柱}"}}} />;
