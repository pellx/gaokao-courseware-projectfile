import React from 'react';
import {AutoScene} from '../components/auto';

export const Vm: React.FC = () => <AutoScene k="vm" d={{"tag": "考点三", "title": "气体摩尔体积", "blocks": [{"t": "big", "at": "vm2", "text": "标准状况（0 ℃、101 kPa）：V_m ≈ {22.4 L/mol}", "size": 44}, {"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": true, "at": "vm3", "text": "前提一：{标准状况}", "size": 32}]}, {"blocks": [{"t": "mark", "ok": true, "at": "vm3", "text": "前提二：{气体}（混合气体也行）", "size": 32}]}]}, {"t": "rule", "tag": "标况下不是气体", "at": "vm4", "text": "H2O、{SO3}、CCl4、{HF}、乙醇、苯", "c": "orange", "size": 32}], "callout": {"label": "易错", "at": "vm5", "text": "常温常压下 1 mol 气体 {> 22.4 L}；标况下的混合气体也能用 22.4 L/mol"}}} />;
