import React from 'react';
import {AutoScene} from '../components/auto';

export const Cons: React.FC = () => <AutoScene k="cons" d={{"tag": "考点七", "title": "机械能守恒与振幅", "blocks": [{"t": "rule", "tag": "机械能守恒", "at": "c1", "text": "不计阻力，{总机械能不变}", "c": "red"}, {"t": "big", "at": "c3", "text": "振幅越大 → {能量越大}", "size": 48}], "callout": {"label": "要点", "at": "c4", "text": "机械能守恒，{振幅不变}"}, "beat": {"k": "push", "at": "c3b", "text": "推得越用力\n{振幅越大|red}，能量越大"}}} />;
