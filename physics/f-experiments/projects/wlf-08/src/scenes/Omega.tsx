import React from 'react';
import {AutoScene} from '../components/auto';

export const Omega: React.FC = () => <AutoScene k="omega" d={{"tag": "考点三", "title": "改变角速度", "blocks": [{"t": "big", "at": "w2", "text": "皮带传动：{v_左 = v_右}", "size": 44}, {"t": "big", "at": "w3", "text": "v = ωr　→　{ω_左 ∶ ω_右 = r_右 ∶ r_左}", "size": 44}, {"t": "text", "at": "w3", "text": "角速度与{塔轮半径}成反比", "size": 34}], "callout": {"label": "易错", "at": "w4", "text": "这里的 r 是{塔轮半径}，不是小球的转动半径"}}} />;
