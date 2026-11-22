import React from 'react';
import {AutoScene} from '../components/auto';

export const Home: React.FC = () => <AutoScene k="home" d={{"tag": "考点八", "title": "家庭电路、安全用电和节约用电", "blocks": [{"t": "rule", "tag": "连接", "at": "h1", "text": "各用电器{并联}，总功率越大，干路电流越大", "c": "red", "size": 32}, {"t": "rule", "tag": "安全", "at": "h2", "text": "短路、过载 → 导线{过热}：合适的导线 + 保险装置", "c": "orange", "size": 32}, {"t": "rule", "tag": "节约", "at": "h3", "text": "随手关灯、选用{节能电器}", "c": "green", "size": 32}], "callout": {"label": "要点", "at": "h4", "text": "并联：用电器越多，干路电流{越大}"}, "beat": {"k": "cry", "at": "h2b", "text": "过载\n导线{过热|red}"}}} />;
