import React from 'react';
import {AutoScene} from '../components/auto';

export const Order: React.FC = () => <AutoScene k="order" d={{"tag": "考点八", "title": "检验顺序与干扰的排除", "blocks": [{"t": "chain", "steps": [{"at": "od2", "text": "Ba(NO3)2\n检验并除 SO4^2-"}, {"at": "od2", "text": "过滤"}, {"at": "od2", "text": "AgNO3\n检验 {Cl^-}"}], "arrows": [], "center": true, "size": 32}, {"t": "items", "items": [{"at": "od3", "text": "先加 AgNO3：Ag2SO4 微溶，{干扰}"}, {"at": "od3", "text": "用 BaCl2：{引入 Cl^-}"}], "size": 33}], "callout": {"label": "解题方法", "at": "od4", "text": "每加一种试剂：{会不会带入要检验的离子}"}}} />;
