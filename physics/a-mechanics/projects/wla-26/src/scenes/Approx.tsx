import React from 'react';
import {AutoScene} from '../components/auto';

export const Approx: React.FC = () => <AutoScene k="approx" d={{"tag": "考点四", "title": "近似守恒与分方向守恒", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "近似守恒", "at": "a1", "lines": ["内力 {≫} 外力", "碰撞、爆炸"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "分方向守恒", "at": "a2", "lines": ["某方向外力和为 0", {"at": "a3", "text": "光滑水平面：{水平方向}守恒"}], "c": "red", "size": 32}]}]}], "callout": {"label": "要点", "at": "a4", "text": "可以在{某一方向}上守恒"}, "beat": {"k": "snow", "at": "a3b", "text": "竖直方向有外力\n{水平方向|red}仍可守恒"}}} />;
