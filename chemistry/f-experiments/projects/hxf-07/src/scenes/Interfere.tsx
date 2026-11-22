import React from 'react';
import {AutoScene} from '../components/auto';

export const Interfere: React.FC = () => <AutoScene k="interfere" d={{"tag": "考点二", "title": "陷阱一：干扰未排除", "blocks": [{"t": "mark", "ok": false, "at": "if1", "text": "加 BaCl2 有白色沉淀 → 含 SO4^2-（Ag^+、CO3^2- 也可）", "size": 30}, {"t": "mark", "ok": false, "at": "if2", "text": "先氯水后 KSCN 变红 → 含 Fe^2+（可能原有 Fe^3+）", "size": 30}, {"t": "mark", "ok": false, "at": "if3", "text": "淀粉 KI 试纸变蓝 → Cl2（O3、NO2 也可）", "size": 30}], "callout": {"label": "解题方法", "at": "if4", "text": "“一定含有”→ 想{还有谁也行}"}}} />;
