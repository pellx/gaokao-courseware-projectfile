import React from 'react';
import {AutoScene} from '../components/auto';

export const Expr: React.FC = () => <AutoScene k="expr" d={{"tag": "考点五", "title": "表达式的含义", "blocks": [{"t": "items", "items": [{"at": "e1", "text": "{矢量式}：先规定正方向"}, {"at": "e2", "text": "速度相对{同一参考系}（通常是地面）"}, {"at": "e3", "text": "{任意两个时刻}总动量都相等"}], "size": 34}], "callout": {"label": "易错", "at": "e4", "text": "总动量不变，{各物体动量可以变}"}}} />;
