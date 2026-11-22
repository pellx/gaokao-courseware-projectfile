import React from 'react';
import {AutoScene} from '../components/auto';

export const Tool: React.FC = () => <AutoScene k="tool" d={{"tag": "考点一", "title": "滴定原理与仪器", "blocks": [{"t": "big", "at": "to1", "text": "c(待) = {c(标)·V(标) / V(待)}", "size": 44}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "酸式", "at": "to2", "text": "酸、{强氧化剂}（KMnO4）", "c": "red", "size": 31}]}, {"blocks": [{"t": "rule", "tag": "碱式", "at": "to2", "text": "碱，下端{橡胶管|orange}", "c": "orange", "size": 31}]}]}, {"t": "text", "at": "to3", "text": "滴定管：0 刻度在{上}，读到 {0.01 mL}", "size": 32}], "callout": {"label": "易错", "at": "to4", "text": "KMnO4 用{酸式}滴定管"}}} />;
