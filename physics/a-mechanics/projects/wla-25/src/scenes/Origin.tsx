import React from 'react';
import {AutoScene} from '../components/auto';

export const Origin: React.FC = () => <AutoScene k="origin" d={{"tag": "考点一", "title": "动量概念的提出", "blocks": [{"t": "rule", "tag": "寻找", "at": "o1", "text": "碰撞前后{不变}的量", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": false, "at": "o2", "text": "速度之和、动能之和：不一定不变", "size": 30}]}, {"blocks": [{"t": "mark", "ok": true, "at": "o3", "text": "{m_1v_1 + m_2v_2}：保持不变", "size": 30}]}]}, {"t": "big", "at": "o4", "text": "动量 = {mv}", "size": 52}], "callout": {"label": "要点", "at": "o5", "text": "动量来自碰撞中的“{不变量}”"}}} />;
