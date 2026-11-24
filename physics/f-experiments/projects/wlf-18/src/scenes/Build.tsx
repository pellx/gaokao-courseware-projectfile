import React from 'react';
import {AutoScene} from '../components/auto';

export const Build: React.FC = () => <AutoScene k="build" d={{"tag": "考点八", "title": "制作与调试", "blocks": [{"t": "items", "items": [{"at": "b1", "text": "连接前{检查元件}是否完好"}, {"at": "b2", "text": "欧姆挡测干簧管{通断}、光敏电阻{阻值}"}, {"at": "b3", "text": "按电路图连接，{检查无误}后通电"}, {"at": "b4", "text": "移动磁体、遮挡光线，看能否{按预期动作}"}], "size": 40}], "callout": {"label": "要点", "at": "b4", "text": "移动磁体、遮挡光线，{逐项检验}"}}} />;
