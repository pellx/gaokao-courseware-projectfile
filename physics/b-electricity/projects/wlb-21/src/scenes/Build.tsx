import React from 'react';
import {AutoScene} from '../components/auto';

export const Build: React.FC = () => <AutoScene k="build" d={{"tag": "考点一", "title": "变压器的构造", "blocks": [{"t": "rule", "tag": "构造", "at": "a1", "text": "{闭合铁芯} + 原线圈 + 副线圈", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "原线圈", "at": "a2", "lines": ["初级线圈", "接{电源}"], "c": "red", "size": 36}]}, {"blocks": [{"t": "panel", "title": "副线圈", "at": "a3", "lines": ["次级线圈", "接{负载}"], "c": "orange", "size": 36}]}]}], "callout": {"label": "要点", "at": "a4", "text": "两个线圈之间{没有导线}相连"}}} />;
