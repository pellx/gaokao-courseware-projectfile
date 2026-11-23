import React from 'react';
import {AutoScene} from '../components/auto';

export const Clear: React.FC = () => <AutoScene k="clear" d={{"tag": "考点七", "title": "概念辨析", "blocks": [{"t": "mark", "ok": false, "at": "g1", "text": "洛伦兹力是恒力"}, {"t": "mark", "ok": true, "at": "g1", "text": "洛伦兹力方向随速度变化，是{变力}"}, {"t": "mark", "ok": true, "at": "g2", "text": "正、负电荷同速运动，受力方向{相反}"}], "callout": {"label": "易错", "at": "g3", "text": "洛伦兹力{不是恒力}"}, "beat": {"k": "pair", "at": "g2b", "text": "正、负电荷\n受力{相反|red}"}}} />;
