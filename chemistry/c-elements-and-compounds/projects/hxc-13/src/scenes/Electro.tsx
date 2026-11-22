import React from 'react';
import {AutoScene} from '../components/auto';

export const Electro: React.FC = () => <AutoScene k="electro" d={{"tag": "考点三", "title": "电解法", "blocks": [{"t": "items", "items": [{"at": "el1", "text": "2NaCl（熔融）═通电═ 2Na + Cl2↑"}, {"at": "el1", "text": "MgCl2（熔融）═通电═ Mg + Cl2↑"}, {"at": "el2", "text": "2Al2O3（熔融）═通电、{冰晶石|orange}═ 4Al + 3O2↑"}], "size": 34}, {"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": false, "at": "el3", "text": "电解 AlCl3（{共价化合物}）", "size": 30}]}, {"blocks": [{"t": "mark", "ok": false, "at": "el3", "text": "电解 MgO（{熔点太高}）", "size": 30}]}]}], "callout": {"label": "易错", "at": "el4", "text": "电解 NaCl {溶液}得不到 Na"}}} />;
