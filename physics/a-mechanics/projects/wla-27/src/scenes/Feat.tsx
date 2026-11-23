import React from 'react';
import {AutoScene} from '../components/auto';

export const Feat: React.FC = () => <AutoScene k="feat" d={{"tag": "考点一", "title": "碰撞的特点", "blocks": [{"t": "items", "items": [{"at": "f1", "text": "作用时间{极短}，相互作用力很大"}, {"at": "f2", "text": "内力 {≫} 外力：系统{动量守恒}"}, {"at": "f3", "text": "物体的位移{可以忽略}"}], "size": 36}], "callout": {"label": "要点", "at": "f4", "text": "内力远大于外力，{动量守恒}"}, "beat": {"k": "pool", "at": "f3b", "text": "台球相撞只在一瞬间\n总动量{不变|red}"}}} />;
