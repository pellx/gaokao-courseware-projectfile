import React from 'react';
import {AutoScene} from '../components/auto';

export const Law: React.FC = () => <AutoScene k="law" d={{"tag": "考点四", "title": "牛顿第一定律", "blocks": [{"t": "big", "at": "d1", "text": "一切物体总保持{匀速直线运动状态}或{静止状态}", "size": 40}, {"t": "text", "at": "d2", "text": "除非作用在它上面的力{迫使它改变}这种状态", "size": 34}], "callout": {"label": "要点", "at": "d4", "text": "描述物体{不受力}时的规律"}}} />;
