import React from 'react';
import {AutoScene} from '../components/auto';

export const Clarify: React.FC = () => <AutoScene k="clarify" d={{"tag": "考点九", "title": "概念辨析", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": false, "at": "i1", "text": "质量亏损 = 核子数减少"}]}, {"blocks": [{"t": "mark", "ok": true, "at": "i1", "text": "核反应前后{质量数守恒}"}]}]}, {"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": false, "at": "i3", "text": "结合能是原子核具有的能量"}]}, {"blocks": [{"t": "mark", "ok": true, "at": "i3", "text": "结合能是{拆开需要}的能量"}]}]}], "callout": {"label": "易错", "at": "i4", "text": "质量亏损{≠}质量数减少"}}} />;
