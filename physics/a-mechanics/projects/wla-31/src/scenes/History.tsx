import React from 'react';
import {AutoScene} from '../components/auto';

export const History: React.FC = () => <AutoScene k="history" d={{"tag": "考点五", "title": "等时性的发现", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "伽利略", "at": "h1", "lines": ["发现单摆的{等时性}"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "惠更斯", "at": "h3", "lines": ["确定{周期公式}", "发明{摆钟}"], "c": "orange", "size": 34}]}]}, {"t": "text", "at": "h2", "text": "等时性：小摆角时周期与振幅无关", "size": 32}], "callout": {"label": "要点", "at": "h4", "text": "伽利略：等时性；惠更斯：{周期公式、摆钟}"}, "beat": {"k": "coin", "at": "h2b", "text": "摆幅变小\n来回一次的时间{不变|red}"}}} />;
