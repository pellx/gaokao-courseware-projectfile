import React from 'react';
import {AutoScene} from '../components/auto';

export const Industry: React.FC = () => <AutoScene k="industry" d={{"tag": "考点四", "title": "工业制硝酸", "blocks": [{"t": "chain", "steps": [{"at": "in_2", "text": "NH3"}, {"at": "in_2", "text": "NO"}, {"at": "in_3", "text": "NO2"}, {"at": "in_3", "text": "HNO3", "c": "red"}], "arrows": ["O2、催化剂、△", "O2", "H2O"], "center": true, "size": 42}, {"t": "items", "items": [{"at": "in_2", "text": "4NH3 + 5O2 ═催化剂、△═ 4NO + 6H2O"}, {"at": "in_3", "text": "2NO + O2 = 2NO2"}, {"at": "in_3", "text": "3NO2 + H2O = 2HNO3 + NO（NO {循环利用|orange}）"}], "size": 32}], "callout": {"label": "考法", "at": "in_4", "text": "写出三步方程式；通入{过量空气}提高 NO 的转化率"}}} />;
