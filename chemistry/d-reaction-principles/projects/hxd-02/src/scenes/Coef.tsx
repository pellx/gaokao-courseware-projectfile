import React from 'react';
import {AutoScene} from '../components/auto';

export const Coef: React.FC = () => <AutoScene k="coef" d={{"tag": "考点三", "title": "定系数的方法", "blocks": [{"t": "items", "items": [{"at": "co1", "text": "① 找目标式中每种物质{只出现一次}的已知式"}, {"at": "co2", "text": "② 位置相同取 {+}，相反取 {−}"}, {"at": "co2", "text": "③ 系数是几就乘几"}], "size": 32}, {"t": "panel", "title": "例：C(s) + 1/2 O2(g) = CO(g)", "at": "co3", "lines": ["① C(s) + O2(g) = CO2(g)　ΔH1", "② CO(g) + 1/2 O2(g) = CO2(g)　ΔH2", "目标 = ① − ②　ΔH = {ΔH1 − ΔH2}"], "c": "orange", "size": 31}], "callout": {"label": "解题方法", "at": "co4", "text": "定完系数{相加检验}：中间物质全部消掉"}, "beat": {"k": "lesson", "at": "co3b", "text": "先找{只出现一次|red}的物质\n定系数"}}} />;
