import React from 'react';
import {AutoScene} from '../components/auto';

export const Lam: React.FC = () => <AutoScene k="lam" d={{"tag": "考点六", "title": "波长、周期和波速", "blocks": [{"t": "rule", "tag": "波长 λ", "at": "l1", "text": "相位总相同的{两个相邻质点}间的距离", "c": "red"}, {"t": "text", "at": "l2", "text": "相邻两波峰（或两波谷）间距 = λ", "size": 32}, {"t": "big", "at": "l4", "text": "v = {λ/T} = {λf}", "size": 60}], "callout": {"label": "要点", "at": "l5", "text": "波速 ≠ {质点振动速度}"}}} />;
