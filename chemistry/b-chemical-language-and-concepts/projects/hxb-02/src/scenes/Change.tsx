import React from 'react';
import {AutoScene} from '../components/auto';

export const Change: React.FC = () => <AutoScene k="change" d={{"tag": "考点六", "title": "物理变化与化学变化", "blocks": [{"t": "big", "at": "ch1", "text": "判断标准：有没有{新物质}生成", "size": 42}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "物理变化", "at": "ch2", "lines": ["{焰色试验}", "蒸馏、分馏、升华", "潮解、胶体聚沉、吸附"], "c": "green"}]}, {"blocks": [{"t": "panel", "title": "化学变化", "at": "ch3", "lines": ["{干馏}、裂化、裂解", "风化、钝化", "同素异形体转化、煤的气化液化"], "c": "red"}]}]}], "callout": {"label": "易错", "at": "ch4", "text": "{焰色试验}是物理变化；“{分}馏”物理，“{干}馏”化学；NaCl 熔化不是化学变化"}, "beat": [{"k": "cook", "at": "ch3b", "text": "煮汤：生成新物质\n= {化学变化|red}"}, {"k": "melt", "at": "ch3c", "text": "冰淇淋化了\n只是状态变化\n= {物理变化|green}"}]}} />;
