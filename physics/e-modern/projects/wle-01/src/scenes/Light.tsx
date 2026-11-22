import React from 'react';
import {AutoScene} from '../components/auto';

export const Light: React.FC = () => <AutoScene k="light" d={{"tag": "考点二", "title": "光速不变的实验事实", "blocks": [{"t": "rule", "tag": "理论", "at": "b1", "text": "真空中光速 {c = 3.0×10^8 m/s}", "c": "orange"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "经典预期", "at": "b2", "lines": ["参考系运动", "光速应该改变"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "实验事实", "at": "b3", "lines": ["迈克耳孙—莫雷实验", "光速{都相同}"], "c": "red", "size": 32}]}]}], "callout": {"label": "要点", "at": "b4", "text": "光速不变与{经典速度叠加}矛盾"}}} />;
