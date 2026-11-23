import React from 'react';
import {AutoScene} from '../components/auto';

export const Dir: React.FC = () => <AutoScene k="dir" d={{"tag": "考点二", "title": "安培力的方向特点", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "b2", "text": "F {⊥} B", "size": 56}]}, {"blocks": [{"t": "big", "at": "b2", "text": "F {⊥} I", "size": 56, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "rule", "tag": "平面", "at": "b3", "text": "F 垂直于 {B 与 I 所在的平面}", "c": "red", "size": 32}], "callout": {"label": "要点", "at": "b4", "text": "B 与 I 不一定垂直，F {一定垂直于两者}"}}} />;
