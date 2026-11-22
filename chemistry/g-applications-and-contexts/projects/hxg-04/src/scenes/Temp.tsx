import React from 'react';
import {AutoScene} from '../components/auto';

export const Temp: React.FC = () => <AutoScene k="temp" d={{"tag": "考点一", "title": "控制温度的目的", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "升温", "at": "te1", "lines": ["加快速率", "平衡向吸热方向移动", "增大溶解度"], "c": "orange", "size": 31}]}, {"blocks": [{"t": "panel", "title": "不能太高", "at": "te2", "lines": ["H2O2、NH4HCO3 {分解}", "HCl、NH3 {挥发}", "催化剂失活"], "c": "red", "size": 31}]}]}, {"t": "text", "at": "te3", "text": "{趁热过滤}：防析出损失；冰水浴：降低溶解度", "size": 32, "center": true}], "callout": {"label": "答题模板", "at": "te4", "text": "低于 T 速率慢；高于 T {分解或挥发}"}}} />;
