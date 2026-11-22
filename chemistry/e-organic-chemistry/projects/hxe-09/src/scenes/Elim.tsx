import React from 'react';
import {AutoScene} from '../components/auto';

export const Elim: React.FC = () => <AutoScene k="elim" d={{"tag": "考点三", "title": "消去反应", "blocks": [{"t": "big", "at": "el2", "text": "CH3CH2Br + NaOH →(乙醇，△) {CH2=CH2↑} + NaBr + H2O", "size": 36}, {"t": "rule", "tag": "条件", "at": "el1", "text": "{NaOH 醇溶液、加热}", "c": "red", "size": 33}, {"t": "rule", "tag": "结构要求", "at": "el3", "text": "{β-碳上有氢}；CH3Cl、(CH3)3CCH2Br 不能消去", "c": "orange", "size": 31}], "callout": {"label": "易错", "at": "el4", "text": "2-溴丁烷消去：{两种}烯烃"}, "beat": {"k": "tanuki", "at": "el3b", "text": "隔壁碳{没有氢|red}\n消去不了"}}} />;
