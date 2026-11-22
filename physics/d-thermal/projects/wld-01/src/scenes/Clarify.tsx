import React from 'react';
import {AutoScene} from '../components/auto';

export const Clarify: React.FC = () => <AutoScene k="clarify" d={{"tag": "考点八", "title": "概念辨析", "blocks": [{"t": "mark", "ok": true, "at": "c1", "text": "显微镜下看到的是{悬浮微粒}"}, {"t": "mark", "ok": false, "at": "c1", "text": "显微镜下看到了分子"}, {"t": "mark", "ok": true, "at": "c2", "text": "折线是每隔一定时间微粒{位置的连线}"}, {"t": "mark", "ok": false, "at": "c2", "text": "折线是微粒的运动轨迹"}], "callout": {"label": "易错", "at": "c4", "text": "看到的不是分子；折线{不是轨迹}"}, "beat": {"k": "cam", "at": "c3b", "text": "每隔一段时间记录位置\n连线{不是轨迹|red}"}}} />;
