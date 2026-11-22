import React from 'react';
import {AutoScene} from '../components/auto';

export const Chlorine: React.FC = () => <AutoScene k="chlorine" d={{"tag": "考点一", "title": "Cl2 的实验室制法", "blocks": [{"t": "big", "at": "cl1", "text": "MnO2 + 4HCl(浓) →(△) MnCl2 + Cl2↑ + 2H2O", "size": 38}, {"t": "chain", "steps": [{"at": "cl2", "text": "{饱和食盐水}\n除 HCl"}, {"at": "cl2", "text": "浓硫酸\n干燥"}, {"at": "cl3", "text": "向上排空气\n收集"}, {"at": "cl3", "text": "{NaOH 溶液}\n吸收"}], "arrows": [], "center": true, "size": 30}], "callout": {"label": "易错", "at": "cl4", "text": "盐酸变稀后{反应停止}"}}} />;
