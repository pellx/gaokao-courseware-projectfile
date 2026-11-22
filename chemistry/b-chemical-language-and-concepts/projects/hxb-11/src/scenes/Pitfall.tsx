import React from 'react';
import {AutoScene} from '../components/auto';

export const Pitfall: React.FC = () => <AutoScene k="pitfall" d={{"tag": "考点八", "title": "典型失分点", "blocks": [{"t": "rule", "tag": "产物", "at": "pf1", "text": "酸性 KMnO4 → {Mn^2+}（不是 MnO2）；稀 HNO3 → {NO}", "c": "red", "size": 31}, {"t": "rule", "tag": "环境", "at": "pf2", "text": "酸性不出现 OH^-，碱性不出现 H^+", "c": "orange", "size": 31}, {"t": "rule", "tag": "配平", "at": "pf3", "text": "系数{最简整数比}；电荷守恒", "c": "green", "size": 31}, {"t": "rule", "tag": "符号", "at": "pf3", "text": "↑、↓、△、通电、可逆号", "c": "brown", "size": 31}], "callout": {"label": "答题模板", "at": "pf4", "text": "写完检查五项：{原子、电荷、电子、环境、条件和符号}"}, "beat": {"k": "akari", "at": "pf3b", "text": "写完别急着交\n{倒着查一遍|red}"}}} />;
