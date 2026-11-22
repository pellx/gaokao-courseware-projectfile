import React from 'react';
import {AutoScene} from '../components/auto';

export const Req: React.FC = () => <AutoScene k="req" d={{"tag": "考点六", "title": "案例 2 的器材与要求", "blocks": [{"t": "items", "items": [{"at": "q1", "text": "天平、刻度尺；{铅垂线}确定投影点 O"}, {"at": "q2", "text": "斜槽末端{水平}"}, {"at": "q3", "text": "m_入 {>} m_被，防反弹；两球{大小相同}，对心碰撞"}, {"at": "q4", "text": "每次从{同一位置由静止}释放"}], "size": 32}], "callout": {"label": "易错", "at": "q5", "text": "斜槽{不必光滑}，同一位置释放即可"}}} />;
