import React from 'react';
import {AutoScene} from '../components/auto';

export const Dis: React.FC = () => <AutoScene k="dis" d={{"tag": "考点二", "title": "放电过程", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "b1", "text": "q {↓}", "size": 60, "c": "orange", "soft": "orangeSoft"}]}, {"blocks": [{"t": "big", "at": "b1", "text": "i {↑}", "size": 60}]}]}, {"t": "big", "at": "b3", "text": "电场能 → {磁场能}", "size": 46}], "callout": {"label": "要点", "at": "b4", "text": "放电完毕：q = 0，{i 最大}"}}} />;
