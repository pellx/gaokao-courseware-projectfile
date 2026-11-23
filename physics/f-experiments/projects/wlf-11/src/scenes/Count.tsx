import React from 'react';
import {AutoScene} from '../components/auto';

export const Count: React.FC = () => <AutoScene k="count" d={{"tag": "考点五", "title": "计数与摆动方式", "blocks": [{"t": "items", "items": [{"at": "c1", "text": "按下停表时数 {“0”}"}, {"at": "c1", "text": "每次{同方向}经过最低点，记一次全振动"}, {"at": "c3", "text": "在{同一竖直平面内}摆动，不做圆锥摆"}], "size": 34}], "callout": {"label": "易错", "at": "c4", "text": "经过最低点一次只是{半个周期}"}}} />;
