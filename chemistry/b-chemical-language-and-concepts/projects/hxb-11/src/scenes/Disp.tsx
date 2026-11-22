import React from 'react';
import {AutoScene} from '../components/auto';

export const Disp: React.FC = () => <AutoScene k="disp" d={{"tag": "考点五", "title": "歧化与归中的写法", "blocks": [{"t": "panel", "title": "歧化：先配产物", "at": "di1", "lines": [{"at": "di2", "text": "Cl^-（降 1）× {5}，ClO3^-（升 5）× {1}，倒推 3Cl2"}, {"at": "di2", "text": "3Cl2 + 6OH^- ═△═ 5Cl^- + ClO3^- + 3H2O"}], "c": "red", "size": 32}, {"t": "panel", "title": "归中：先配反应物", "at": "di3", "lines": ["5Cl^- + ClO3^- + 6H^+ = 3Cl2↑ + 3H2O"], "c": "orange", "size": 32}], "callout": {"label": "解题方法", "at": "di4", "text": "哪边有两种同元素物质，就{从哪边配起}"}, "beat": {"k": "curry", "at": "di3b", "text": "一份食材做两道菜\n{先配产物一侧|red}"}}} />;
