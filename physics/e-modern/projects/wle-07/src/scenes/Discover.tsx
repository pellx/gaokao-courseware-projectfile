import React from 'react';
import {AutoScene} from '../components/auto';

export const Discover: React.FC = () => <AutoScene k="discover" d={{"tag": "考点三", "title": "质子和中子的发现", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "质子", "at": "c1", "lines": ["卢瑟福，1919 年", "α 粒子轰击{氮核}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "中子", "at": "c3", "lines": ["查德威克，1932 年", "α 粒子轰击{铍}"], "c": "orange", "size": 32}]}]}, {"t": "text", "at": "c2", "text": "中子由卢瑟福{预言}，查德威克{证实}", "size": 32}], "callout": {"label": "要点", "at": "c4", "text": "卢瑟福发现{质子}，查德威克发现{中子}"}}} />;
