import React from 'react';
import {AutoScene} from '../components/auto';

export const Coulomb: React.FC = () => <AutoScene k="coulomb" d={{"tag": "考点七", "title": "库仑定律", "blocks": [{"t": "big", "at": "l1", "text": "F = {kq_1q_2/r^2}", "size": 60}, {"t": "items", "items": [{"at": "l2", "text": "适用：真空中两个{静止点电荷}，方向沿{连线}"}, {"at": "l3", "text": "k = {9.0×10^9 N·m^2/C^2}"}, {"at": "l4", "text": "库仑{扭秤}；控制变量、类比万有引力"}], "size": 30}], "callout": {"label": "易错", "at": "l5", "text": "r 很小时{公式不适用}"}, "beat": {"k": "a3", "at": "l4b", "text": "相同金属球接触\n{平分电荷|red}"}}} />;
