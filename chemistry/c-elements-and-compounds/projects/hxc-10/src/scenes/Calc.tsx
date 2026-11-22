import React from 'react';
import {AutoScene} from '../components/auto';

export const Calc: React.FC = () => <AutoScene k="calc" d={{"tag": "考点三", "title": "氮氧化物溶于水的计算", "blocks": [{"t": "big", "at": "ca1", "text": "4NO2 + O2 + 2H2O = 4HNO3　（{4 : 1}）", "size": 40}, {"t": "big", "at": "ca2", "text": "4NO + 3O2 + 2H2O = 4HNO3　（{4 : 3}）", "size": 40, "c": "orange", "soft": "orangeSoft"}, {"t": "rule", "tag": "过量", "at": "ca3", "text": "O2 过量剩 O2；NO2 过量最后剩 {NO}", "c": "green", "size": 31}], "callout": {"label": "解题方法", "at": "ca4", "text": "本质是{得失电子守恒}：N 失的电子全被 O2 得到"}}} />;
