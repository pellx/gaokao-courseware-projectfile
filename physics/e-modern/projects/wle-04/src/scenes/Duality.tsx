import React from 'react';
import {AutoScene} from '../components/auto';

export const Duality: React.FC = () => <AutoScene k="duality" d={{"tag": "考点四", "title": "光的波粒二象性", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "波动性", "at": "d1", "lines": ["干涉、衍射、偏振", "传播时表现明显"], "c": "orange", "size": 34}]}, {"blocks": [{"t": "panel", "title": "粒子性", "at": "d2", "lines": ["光电效应、康普顿效应", "与物质作用时明显"], "c": "red", "size": 34}]}]}, {"t": "big", "at": "d3", "text": "光具有{波粒二象性}", "size": 50}], "callout": {"label": "易错", "at": "d5", "text": "两种性质{同时具有}，不是宏观的波或粒子"}, "beat": {"k": "bear", "at": "d3b", "text": "两副样子\n{同属一个|red}"}}} />;
