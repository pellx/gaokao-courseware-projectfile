import React from 'react';
import {AutoScene} from '../components/auto';

export const Dir: React.FC = () => <AutoScene k="dir" d={{"tag": "考点八", "title": "振动方向与传播方向", "blocks": [{"t": "rule", "tag": "规律", "at": "r1", "text": "沿传播方向，后面质点{重复}前面质点的振动", "c": "red"}, {"t": "chain", "steps": [{"at": "r2", "text": "波形 + 传播方向"}, {"at": "r2", "text": "各质点振动方向", "c": "orange"}], "arrows": ["可确定"]}, {"t": "text", "at": "r3", "text": "反之，由质点振动方向可确定{传播方向}", "size": 34}], "callout": {"label": "要点", "at": "r4", "text": "波峰两侧质点振动方向{相反}"}, "beat": {"k": "gift", "at": "r3b", "text": "后面的质点\n{重复|red}前面的振动"}}} />;
