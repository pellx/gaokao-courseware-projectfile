import React from 'react';
import {AutoScene} from '../components/auto';

export const Lithium: React.FC = () => <AutoScene k="li" d={{"tag": "考点六", "title": "锂离子电池", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "放电", "at": "li1", "text": "Li^+：负极{脱嵌} → 正极{嵌入}", "c": "red", "size": 31}]}, {"blocks": [{"t": "rule", "tag": "充电", "at": "li3", "text": "Li^+：正极 → {负极|orange}", "c": "orange", "size": 31}]}]}, {"t": "items", "items": [{"at": "li2", "text": "负极：Li_(x)C6 − xe^- = xLi^+ + 6C"}, {"at": "li2", "text": "正极：Li_(1−x)CoO2 + xLi^+ + xe^- = LiCoO2"}], "size": 31}], "callout": {"label": "易错", "at": "li4", "text": "不能用{水溶液}作电解质；放电时 Li^+ 移向{正极}"}, "beat": {"k": "hood", "at": "li2b", "text": "Li^+ 在两极之间\n{来回嵌入、脱嵌|red}"}}} />;
