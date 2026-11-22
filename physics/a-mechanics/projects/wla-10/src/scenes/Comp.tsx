import React from 'react';
import {AutoScene} from '../components/auto';

export const Comp: React.FC = () => <AutoScene k="comp" d={{"tag": "考点三", "title": "平衡条件的分量形式", "blocks": [{"t": "rule", "tag": "方法", "at": "c1", "text": "各力沿 x、y 轴{正交分解}", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "c2", "text": "F_x合 = {0}", "size": 48}]}, {"blocks": [{"t": "big", "at": "c2", "text": "F_y合 = {0|orange}", "size": 48, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "要点", "at": "c4", "text": "分量形式与 F合 = 0 {等价}"}}} />;
