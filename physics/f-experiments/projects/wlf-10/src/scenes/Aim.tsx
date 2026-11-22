import React from 'react';
import {AutoScene} from '../components/auto';

export const Aim: React.FC = () => <AutoScene k="aim" d={{"tag": "考点一", "title": "实验目的与思路", "blocks": [{"t": "rule", "tag": "思路", "at": "a1", "text": "两物体在{同一直线}上碰撞，测质量和碰撞前后的速度", "c": "red"}, {"t": "big", "at": "a3", "text": "{m_1v_1 + m_2v_2} = {m_1v_1′ + m_2v_2′|orange}", "size": 48}, {"t": "text", "at": "a2", "text": "需要测：两物体的{质量}，碰撞前后各自的{速度}", "size": 32}], "callout": {"label": "要点", "at": "a4", "text": "守恒条件：系统所受{外力矢量和为零}"}}} />;
