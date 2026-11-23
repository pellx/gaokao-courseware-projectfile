import React from 'react';
import {AutoScene} from '../components/auto';

export const FieldB: React.FC = () => <AutoScene k="field" d={{"tag": "考点六", "title": "磁感应强度", "blocks": [{"t": "big", "at": "f2", "text": "B = {F/Il}", "size": 62}, {"t": "rule", "tag": "定义", "at": "f3", "text": "比值定义，由{磁场本身}决定", "c": "orange", "size": 32}, {"t": "rule", "tag": "性质", "at": "f4", "text": "{矢量}，单位 T，叠加用平行四边形定则", "c": "red", "size": 32}], "callout": {"label": "易错", "at": "f5", "text": "B 的方向 = 小磁针 {N 极受力方向}"}}} />;
