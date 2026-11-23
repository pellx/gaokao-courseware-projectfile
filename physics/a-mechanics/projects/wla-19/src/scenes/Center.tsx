import React from 'react';
import {AutoScene} from '../components/auto';

export const Center: React.FC = () => <AutoScene k="center" d={{"tag": "考点九", "title": "中心天体与环绕天体", "blocks": [{"t": "big", "at": "k2", "text": "G{M}m/r^2 = m·4π^2r/T^2　→　m {约掉}", "size": 42}, {"t": "text", "at": "k3", "text": "求谁的质量，就研究{绕它转}的天体", "size": 32}], "callout": {"label": "易错", "at": "k4", "text": "只能求{中心天体}质量"}, "beat": {"k": "desk", "at": "k3b", "text": "求出的是\n{中心天体|red}质量"}}} />;
