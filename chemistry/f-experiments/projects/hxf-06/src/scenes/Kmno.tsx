import React from 'react';
import {AutoScene} from '../components/auto';

export const Kmno: React.FC = () => <AutoScene k="kmno4" d={{"tag": "考点二", "title": "氧化还原滴定（一）：KMnO4 法", "blocks": [{"t": "rule", "tag": "指示剂", "at": "km2", "text": "{自身指示}：终点溶液变{浅红色}", "c": "red", "size": 32}, {"t": "items", "items": [{"at": "km3", "text": "MnO4^- ～ {5Fe^2+}"}, {"at": "km3", "text": "2MnO4^- ～ 5H2C2O4"}, {"at": "km3", "text": "装在{酸式滴定管}"}], "size": 34}], "callout": {"label": "易错", "at": "km4", "text": "用{稀硫酸}酸化，不用盐酸"}}} />;
