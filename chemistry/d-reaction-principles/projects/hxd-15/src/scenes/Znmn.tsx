import React from 'react';
import {AutoScene} from '../components/auto';

export const Znmn: React.FC = () => <AutoScene k="znmn" d={{"tag": "考点一", "title": "碱性锌锰电池", "blocks": [{"t": "items", "items": [{"at": "zm2", "text": "负极：Zn + 2OH^- − 2e^- = {Zn(OH)2}"}, {"at": "zm3", "text": "正极：2MnO2 + 2H2O + 2e^- = 2MnOOH + 2OH^-"}, {"at": "zm3", "text": "总：Zn + 2MnO2 + 2H2O = 2MnOOH + Zn(OH)2"}], "size": 32}], "callout": {"label": "易错", "at": "zm4", "text": "碱性中负极生成 {Zn(OH)2}，不是 Zn^2+"}}} />;
