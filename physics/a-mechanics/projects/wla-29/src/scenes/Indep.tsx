import React from 'react';
import {AutoScene} from '../components/auto';

export const Indep: React.FC = () => <AutoScene k="indep" d={{"tag": "考点六", "title": "周期与振幅无关", "blocks": [{"t": "big", "at": "i1", "text": "振幅变了，{周期不变}", "size": 52}, {"t": "rule", "tag": "决定因素", "at": "i2", "text": "由{振动系统本身}决定", "c": "red", "size": 32}, {"t": "text", "at": "i2", "text": "固有周期、固有频率", "size": 30}], "callout": {"label": "易错", "at": "i3", "text": "周期与振幅{无关}"}, "beat": {"k": "guitar", "at": "i2b", "text": "拨得轻或重\n{音调不变|red}：频率由弦本身决定"}}} />;
