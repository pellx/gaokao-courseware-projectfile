import React from 'react';
import {AutoScene} from '../components/auto';

export const Define: React.FC = () => <AutoScene k="define" d={{"tag": "考点五", "title": "定义式与决定式", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "定义式", "at": "e1", "lines": ["a = Δv/Δt", "怎样{度量}加速度"], "c": "orange", "size": 34}]}, {"blocks": [{"t": "panel", "title": "决定式", "at": "e2", "lines": ["a = F/m", "由{合力和质量}决定"], "c": "red", "size": 34}]}]}, {"t": "text", "at": "e3", "text": "a 不与 Δv 成正比；v 大，a 不一定大", "size": 30}], "callout": {"label": "易错", "at": "e4", "text": "质量是物体{本身的属性}，与 F、a 无关"}}} />;
