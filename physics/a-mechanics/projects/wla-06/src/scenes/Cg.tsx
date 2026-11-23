import React from 'react';
import {AutoScene} from '../components/auto';

export const Cg: React.FC = () => <AutoScene k="cg" d={{"tag": "考点三", "title": "重心", "blocks": [{"t": "rule", "tag": "定义", "at": "c1", "text": "重力的{等效作用点}", "c": "red", "size": 36}, {"t": "items", "items": [{"at": "c2", "text": "位置与{形状}、{质量分布}有关"}, {"at": "c2", "text": "均匀、规则 → {几何中心|orange}"}, {"at": "c3", "text": "可以{不在物体上}：圆环"}, {"at": "c4", "text": "薄板：{悬挂法}，两条竖直线的交点"}], "size": 32}], "callout": {"label": "要点", "at": "c5", "text": "{等效}作用点，不是只有重心受重力"}}} />;
