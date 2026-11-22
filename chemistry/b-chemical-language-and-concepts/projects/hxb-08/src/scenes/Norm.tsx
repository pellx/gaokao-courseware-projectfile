import React from 'react';
import {AutoScene} from '../components/auto';

export const Norm: React.FC = () => <AutoScene k="norm" d={{"tag": "考点七", "title": "计算的规范", "blocks": [{"t": "chain", "steps": [{"at": "no1", "text": "设"}, {"at": "no1", "text": "写方程式"}, {"at": "no1", "text": "标已知、未知"}, {"at": "no1", "text": "列比例"}, {"at": "no1", "text": "求解"}, {"at": "no1", "text": "作答"}], "arrows": [], "center": true, "size": 32}, {"t": "rule", "tag": "单位", "at": "no2", "text": "数值带单位代入；结果写单位，产率写{百分数|orange}", "c": "orange", "size": 32}, {"t": "rule", "tag": "换算", "at": "no3", "text": "{mL 换 L}：25.00 mL = 0.02500 L", "c": "red", "size": 32}], "callout": {"label": "答题模板", "at": "no4", "text": "先写{带字母的表达式}，再代入数值"}}} />;
