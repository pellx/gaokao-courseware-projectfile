import React from 'react';
import {AutoScene} from '../components/auto';

export const Three: React.FC = () => <AutoScene k="three" d={{"tag": "考点四", "title": "二力平衡与三力平衡", "blocks": [{"t": "rule", "tag": "二力平衡", "at": "d1", "text": "两力{等大、反向}、共线", "c": "red"}, {"t": "rule", "tag": "三力平衡", "at": "d2", "text": "任意两力的合力与第三力{等大、反向}", "c": "orange"}, {"t": "text", "at": "d3", "text": "三力平衡 → 转化为二力平衡", "size": 32}], "callout": {"label": "易错", "at": "d4", "text": "平衡力作用在{同一物体}上，与作用力和反作用力不同"}}} />;
