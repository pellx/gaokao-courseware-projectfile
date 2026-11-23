import React from 'react';
import {AutoScene} from '../components/auto';

export const Stop: React.FC = () => <AutoScene k="stop" d={{"tag": "考点三", "title": "涡流的防止", "blocks": [{"t": "rule", "tag": "危害", "at": "c1", "text": "铁芯{发热}，浪费能量", "c": "red", "size": 32}, {"t": "rule", "tag": "措施", "at": "c2", "text": "相互绝缘的{硅钢片}叠成铁芯", "c": "orange", "size": 32}, {"t": "rule", "tag": "原理", "at": "c3", "text": "切断涡流通路，电阻率大，涡流{减小}", "c": "red", "size": 32}], "callout": {"label": "要点", "at": "c4", "text": "硅钢片叠成：减小{涡流损耗}"}}} />;
