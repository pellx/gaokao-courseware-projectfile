import React from 'react';
import {AutoScene} from '../components/auto';

export const Explore: React.FC = () => <AutoScene k="explore" d={{"tag": "考点八", "title": "含硫物质的实验探究", "blocks": [{"t": "chain", "steps": [{"at": "ex2", "text": "① 预测\n写出可能的反应", "c": "orange"}, {"at": "ex3", "text": "② 检验\n证明产物", "c": "red"}, {"at": "ex4", "text": "③ 排除干扰\nO2、NO3^-", "c": "green"}], "arrows": [], "center": true, "size": 32}, {"t": "items", "items": [{"at": "ex3", "text": "证明 Fe^2+：K3[Fe(CN)6] → 蓝色沉淀"}, {"at": "ex3", "text": "证明 SO4^2-：先盐酸，再 BaCl2 → 白色沉淀"}, {"at": "ex4", "text": "干扰：溶解的 {O2}；酸性下的 {NO3^-}"}], "size": 31}], "callout": {"label": "解题方法", "at": "ex5", "text": "对照实验{只改变一个变量}，排除 O2、H^+ 的影响"}, "beat": {"k": "cheer", "at": "ex3b", "text": "别怕\n{预测、检验、排除干扰|red}"}}} />;
