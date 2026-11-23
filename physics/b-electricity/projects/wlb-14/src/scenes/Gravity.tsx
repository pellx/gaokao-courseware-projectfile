import React from 'react';
import {AutoScene} from '../components/auto';

export const Gravity: React.FC = () => <AutoScene k="gravity" d={{"tag": "考点一", "title": "重力的处理", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "一般不计重力", "at": "a2", "lines": ["电子、质子", "α 粒子、离子"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "一般计重力", "at": "a3", "lines": ["带电小球", "液滴、尘埃"], "c": "red", "size": 32}]}]}], "callout": {"label": "要点", "at": "a4", "text": "微观粒子不计重力，宏观带电体{计重力}"}, "beat": {"k": "rice", "at": "a3b", "text": "“大块头”\n{重力不能忽略|red}"}}} />;
