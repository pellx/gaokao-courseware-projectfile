import React from 'react';
import {AutoScene} from '../components/auto';

export const Clear: React.FC = () => <AutoScene k="clear" d={{"tag": "考点八", "title": "概念辨析", "blocks": [{"t": "mark", "ok": false, "at": "h2", "text": "安培力沿 B 的方向"}, {"t": "mark", "ok": true, "at": "h2", "text": "安培力{垂直于} B"}, {"t": "mark", "ok": false, "at": "h3", "text": "导线不受安培力，说明 B = 0"}], "callout": {"label": "易错", "at": "h4", "text": "F = 0 时 B {不一定}为 0"}, "beat": {"k": "huh", "at": "h2b", "text": "F 沿 B？\n{不，垂直|red}"}}} />;
