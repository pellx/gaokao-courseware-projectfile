import React from 'react';
import {AutoScene} from '../components/auto';

export const Level: React.FC = () => <AutoScene k="level" d={{"tag": "考点三", "title": "案例 1 的操作要点", "blocks": [{"t": "rule", "tag": "调水平", "at": "l1", "text": "轻推滑块，经过两光电门的{遮光时间相等}", "c": "red", "size": 34}, {"t": "rule", "tag": "定方向", "at": "l3", "text": "先规定正方向，反向速度取{负值}", "c": "orange", "size": 34}], "callout": {"label": "易错", "at": "l4", "text": "动量是矢量，反向速度{带负号}代入"}, "beat": {"k": "apart", "at": "l3b", "text": "手伸向两边\n速度{一正一负|red}"}}} />;
