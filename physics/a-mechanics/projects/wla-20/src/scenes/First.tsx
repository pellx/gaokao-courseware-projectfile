import React from 'react';
import {AutoScene} from '../components/auto';

export const First: React.FC = () => <AutoScene k="first" d={{"tag": "考点三", "title": "第一宇宙速度", "blocks": [{"t": "big", "at": "c2", "text": "v_1 = √(GM/R) = {√(gR)}", "size": 50}, {"t": "big", "at": "c3", "text": "v_1 ≈ {7.9 km/s}", "size": 60, "c": "orange", "soft": "orangeSoft"}], "callout": {"label": "要点", "at": "c4", "text": "第一宇宙速度 = 近地卫星的{环绕速度}"}}} />;
