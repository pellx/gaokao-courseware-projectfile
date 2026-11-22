import React from 'react';
import {AutoScene} from '../components/auto';

export const Double: React.FC = () => <AutoScene k="double" d={{"tag": "考点五", "title": "双线桥法", "blocks": [{"t": "bridge", "at": "db1", "tokens": ["MnO2", "+", "4HCl(浓)", "═△═", "MnCl2", "+", "Cl2↑", "+", "2H2O"], "arcs": [{"from": 0, "to": 4, "at": "db2", "text": "得到 2e^-，化合价降低，被还原", "c": "orange", "above": false}, {"from": 2, "to": 6, "at": "db3", "text": "失去 2×e^-，化合价升高，被氧化", "c": "red", "above": true}], "size": 46}, {"t": "text", "at": "db3", "text": "4 个 HCl 中只有 {2 个}被氧化，另 2 个起{酸性|orange}作用", "size": 32, "center": true}], "callout": {"label": "易错", "at": "db4", "text": "两条线都从反应物指向生成物{同种元素}；标“得”“失”，总数相等"}, "beat": {"k": "gift", "at": "db3b", "text": "电子是“送出去”的\n{失去多少 = 得到多少|red}"}}} />;
