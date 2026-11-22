import React from 'react';
import {AutoScene} from '../components/auto';

export const Bridge: React.FC = () => <AutoScene k="bridge" d={{"tag": "考点四", "title": "盐桥与双液原电池", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "负极：Zn | ZnSO4", "at": "br1", "lines": ["Zn − 2e^- = Zn^2+", "{Cl^-} 从盐桥移入"], "c": "red", "size": 31}]}, {"blocks": [{"t": "panel", "title": "正极：Cu | CuSO4", "at": "br1", "lines": ["Cu^2+ + 2e^- = Cu", "{K^+|orange} 从盐桥移入"], "c": "orange", "size": 31}]}]}, {"t": "rule", "tag": "盐桥作用", "at": "br2", "text": "{形成闭合回路}、{平衡电荷}", "c": "red", "size": 33}], "callout": {"label": "易错", "at": "br4", "text": "优点：电流{稳定}；取出盐桥：指针{归零}"}, "beat": {"k": "scarf", "at": "br3b", "text": "盐桥\n把{两个半电池连起来|red}"}}} />;
