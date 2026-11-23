import React from 'react';
import {AutoScene} from '../components/auto';

export const Feat: React.FC = () => <AutoScene k="feat" d={{"tag": "考点四", "title": "相互作用力的特点", "blocks": [{"t": "items", "items": [{"at": "d1", "text": "{同时}产生、同时变化、同时消失"}, {"at": "d2", "text": "{性质相同}：同为弹力、同为摩擦力"}, {"at": "d3", "text": "作用在{两个物体}上，效果{不能抵消|orange}"}], "size": 34}], "callout": {"label": "易错", "at": "d4", "text": "{不能抵消}，不能求合力"}, "beat": {"k": "cheek", "at": "d2b", "text": "脸挤脸：{同时|red}产生\n大小相等，都是{弹力|orange}"}}} />;
