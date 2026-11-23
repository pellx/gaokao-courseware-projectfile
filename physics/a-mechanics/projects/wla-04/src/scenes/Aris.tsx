import React from 'react';
import {AutoScene} from '../components/auto';

export const Aris: React.FC = () => <AutoScene k="aris" d={{"tag": "考点一", "title": "亚里士多德的观点与伽利略的反驳", "blocks": [{"t": "rule", "tag": "亚里士多德", "at": "a1", "text": "{重的物体下落得快}", "c": "red", "size": 36}, {"t": "text", "at": "a2", "text": "伽利略：重物 + 轻物{绑在一起|orange}", "size": 34}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "推论一", "at": "a3", "lines": ["轻物拖慢重物", "整体比重物{慢}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "推论二", "at": "a3", "lines": ["整体比重物更重", "整体比重物{快|orange}"], "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "a4", "text": "两个推论{互相矛盾}，原观点错误"}, "beat": {"k": "carry", "at": "a3b", "text": "整体更重 → 该更{快|red}\n轻的拖累 → 该更{慢|orange}"}}} />;
