import React from 'react';
import {AutoScene} from '../components/auto';

export const Write: React.FC = () => <AutoScene k="write" d={{"tag": "考点五", "title": "电极反应式的书写", "blocks": [{"t": "chain", "steps": [{"at": "wr1", "text": "{写总反应}"}, {"at": "wr2", "text": "写负极：失电子"}, {"at": "wr3", "text": "正极 = 总 − 负"}], "arrows": [], "center": true, "size": 36}, {"t": "items", "items": [{"at": "wr2", "text": "产物形式看电解质：碱性中 Zn → {Zn(OH)2}"}, {"at": "wr3", "text": "酸性补 {H^+、H2O}；碱性补 {OH^-、H2O}"}], "size": 33}], "callout": {"label": "易错", "at": "wr4", "text": "两极{电子数相等}；酸性中不出现 OH^-"}}} />;
