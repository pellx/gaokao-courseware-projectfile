import React from 'react';
import {AutoScene} from '../components/auto';

export const Force: React.FC = () => <AutoScene k="force" d={{"tag": "考点六", "title": "力和运动的关系", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": false, "at": "f1", "text": "力维持运动"}]}, {"blocks": [{"t": "mark", "ok": true, "at": "f2", "text": "力{改变}运动状态"}]}]}, {"t": "text", "at": "f3", "text": "运动状态 = 速度：{大小}或{方向}变，状态就变", "size": 32}], "callout": {"label": "要点", "at": "f4", "text": "有合力，运动状态{一定改变}"}}} />;
