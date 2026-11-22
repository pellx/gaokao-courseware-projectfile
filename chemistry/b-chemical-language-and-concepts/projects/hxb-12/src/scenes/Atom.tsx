import React from 'react';
import {AutoScene} from '../components/auto';

export const Atom: React.FC = () => <AutoScene k="atom" d={{"tag": "考点三", "title": "原子守恒（元素守恒）", "blocks": [{"t": "big", "at": "at2", "text": "FeS2 → SO2 → SO3 → H2SO4　　S 守恒：{FeS2 ～ 2H2SO4}", "size": 36}, {"t": "big", "at": "at3", "text": "产率 = 实际产量 ÷ {理论产量} × 100%", "size": 40, "c": "orange", "soft": "orangeSoft"}], "callout": {"label": "解题方法", "at": "at4", "text": "找一种{全程守恒}的元素作“桥”"}}} />;
