import React from 'react';
import {AutoScene} from '../components/auto';

export const Hole: React.FC = () => <AutoScene k="hole" d={{"tag": "考点三", "title": "圆孔衍射与泊松亮斑", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "圆孔衍射", "at": "c1", "lines": ["明暗相间的{圆环}"], "c": "red", "size": 36}]}, {"blocks": [{"t": "panel", "title": "圆盘衍射", "at": "c2", "lines": ["阴影中心有{亮斑}", "泊松亮斑"], "c": "orange", "size": 36}]}]}], "callout": {"label": "要点", "at": "c4", "text": "泊松亮斑{支持波动说}"}, "beat": {"k": "surprise", "at": "c3b", "text": "阴影中心\n竟然是{亮的|red}"}}} />;
