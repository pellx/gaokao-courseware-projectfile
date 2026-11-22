import React from 'react';
import {AutoScene} from '../components/auto';

export const Solubility: React.FC = () => <AutoScene k="sol" d={{"tag": "考点四", "title": "K_sp 与溶解度", "blocks": [{"t": "rule", "tag": "类型相同", "at": "so1", "text": "K_sp 越小，溶解度越小：AgCl > AgBr > AgI", "c": "red", "size": 32}, {"t": "rule", "tag": "类型不同", "at": "so2", "text": "{不能直接比}：Ag2CrO4 的 K_sp 更小，溶解度却更大", "c": "orange", "size": 32}, {"t": "text", "at": "so3", "text": "比较方法：{分别算出饱和溶液浓度}", "size": 32}], "callout": {"label": "易错", "at": "so4", "text": "K_sp 小 ≠ 溶解度小：要{类型相同}"}}} />;
