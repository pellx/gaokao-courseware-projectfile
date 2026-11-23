import React from 'react';
import {AutoScene} from '../components/auto';

export const Sync: React.FC = () => <AutoScene k="sync" d={{"tag": "考点五", "title": "同步变化的物理量", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "电场组", "at": "e1", "lines": ["q、U、E", "电场能"], "c": "red", "size": 38}]}, {"blocks": [{"t": "panel", "title": "磁场组", "at": "e2", "lines": ["i、B", "磁场能"], "c": "orange", "size": 38}]}]}, {"t": "text", "at": "e3", "text": "一组最大时，另一组为 {0}", "size": 38}], "callout": {"label": "易错", "at": "e4", "text": "q 最大时 {i = 0}"}, "beat": {"k": "asleep", "at": "e3b", "text": "一组“睡着”为 0\n另一组{正最大|red}"}}} />;
