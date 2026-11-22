import React from 'react';
import {AutoScene} from '../components/auto';

export const Structure: React.FC = () => <AutoScene k="structure" d={{"tag": "考点一", "title": "醛的结构与甲醛", "blocks": [{"t": "rule", "tag": "醛", "at": "st1", "text": "官能团{醛基 —CHO}", "c": "red", "size": 33}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "甲醛", "at": "st2", "text": "常温{气体}；福尔马林使蛋白质变性", "c": "red", "size": 31}]}, {"blocks": [{"t": "rule", "tag": "结构", "at": "st3", "text": "相当于含 {2 个醛基|orange}", "c": "orange", "size": 31}]}]}], "callout": {"label": "易错", "at": "st4", "text": "福尔马林{不能用于食品保鲜}"}}} />;
