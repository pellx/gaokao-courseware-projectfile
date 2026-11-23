import React from 'react';
import {AutoScene} from '../components/auto';

export const Def: React.FC = () => <AutoScene k="def" d={{"tag": "考点三", "title": "电容", "blocks": [{"t": "big", "at": "d1", "text": "C = {Q/U} = ΔQ/ΔU", "size": 56}, {"t": "text", "at": "d2", "text": "由{电容器本身}决定，与 Q、U 无关", "size": 34}], "callout": {"label": "易错", "at": "d4", "text": "C {不随} Q、U 改变"}}} />;
