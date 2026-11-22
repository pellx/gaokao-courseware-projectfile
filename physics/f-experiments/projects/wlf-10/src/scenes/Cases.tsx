import React from 'react';
import {AutoScene} from '../components/auto';

export const Cases: React.FC = () => <AutoScene k="cases" d={{"tag": "考点四", "title": "案例 1 可研究的碰撞情形", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "弹性碰撞架", "at": "c1", "lines": ["碰后{分开}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "撞针 + 橡皮泥", "at": "c2", "lines": ["碰后{连成一体}", "共同速度运动"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "压缩轻弹簧", "at": "c3", "lines": ["由静止{弹开}", "向相反方向运动"], "c": "red", "size": 32}]}]}, {"t": "big", "at": "c4", "text": "弹开：0 = {m_1v_1′ + m_2v_2′}", "size": 42}], "callout": {"label": "要点", "at": "c4", "text": "弹开前总动量为零，弹开后两滑块{速度反向}"}, "beat": {"k": "stick", "at": "c3b", "text": "叠在一起走\n{共同速度|red}"}}} />;
