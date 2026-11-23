import React from 'react';
import {AutoScene} from '../components/auto';

export const Error: React.FC = () => <AutoScene k="error" d={{"tag": "考点七", "title": "误差说明", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "读数", "at": "e1", "lines": ["等分格数只能粗略显示", "读数有偶然误差"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "摇速", "at": "e2", "lines": ["转速不稳定", "示数上下波动"], "c": "red", "size": 32}]}]}, {"t": "text", "at": "e3", "text": "减小误差：摇速均匀、示数稳定时读数、{多次实验}", "size": 34}], "callout": {"label": "要点", "at": "e4", "text": "摇速{均匀}，示数稳定时读数"}}} />;
