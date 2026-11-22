import React from 'react';
import {AutoScene} from '../components/auto';

export const Agcoord: React.FC = () => <AutoScene k="agcoord" d={{"tag": "考点五", "title": "银的配位：与沉淀的竞争", "blocks": [{"t": "big", "at": "ac1", "text": "Ag^+ + 2NH3 = [Ag(NH3)2]^+（{银氨溶液}）", "size": 40}, {"t": "rule", "tag": "配制", "at": "ac2", "text": "向 AgNO3 中滴加稀氨水，至{沉淀恰好溶解}", "c": "red", "size": 30}, {"t": "rule", "tag": "竞争", "at": "ac3", "text": "AgCl + 2NH3 ⇌ [Ag(NH3)2]^+ + Cl^-；加 HNO3 → {AgCl 又析出|orange}", "c": "orange", "size": 30}, {"t": "rule", "tag": "对比", "at": "ac4", "text": "AgI {不溶于氨水}：沉淀更稳定", "c": "green", "size": 30}], "callout": {"label": "解题方法", "at": "ac5", "text": "写出{沉淀和配位两个平衡}，看谁移动"}}} />;
