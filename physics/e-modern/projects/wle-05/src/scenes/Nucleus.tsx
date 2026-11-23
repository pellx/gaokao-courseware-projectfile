import React from 'react';
import {AutoScene} from '../components/auto';

export const Nucleus: React.FC = () => <AutoScene k="nucleus" d={{"tag": "考点六", "title": "卢瑟福的核式结构模型", "blocks": [{"t": "rule", "tag": "核式结构", "at": "f1", "text": "原子中心有一个{很小的核}", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "原子核", "at": "f2", "lines": ["{全部}正电荷", "{几乎全部}质量"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "电子", "at": "f3", "lines": ["在核外", "{绕核运动}"], "c": "orange", "size": 34}]}]}], "callout": {"label": "易错", "at": "f4", "text": "核集中几乎全部{质量}，体积却{极小}"}, "beat": {"k": "curl", "at": "f3b", "text": "原子核\n{小小一团在中心|red}"}}} />;
