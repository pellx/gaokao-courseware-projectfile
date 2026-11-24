import React from 'react';
import {AutoScene} from '../components/auto';

export const Ldr: React.FC = () => <AutoScene k="ldr" d={{"tag": "考点四", "title": "光敏电阻", "blocks": [{"t": "rule", "tag": "材料", "at": "l1", "text": "{硫化镉}等半导体", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "光照强", "at": "l2", "lines": ["载流子多", "电阻{小}"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "光照弱", "at": "l2", "lines": ["载流子少", "电阻{大}"], "c": "orange", "size": 34}]}]}, {"t": "text", "at": "l3", "text": "光照强弱 → 电阻大小：光控开关、光电计数", "size": 32}], "callout": {"label": "易错", "at": "l4", "text": "光照越强，电阻{越小}"}, "beat": {"k": "sun", "at": "l2b", "text": "光照越强\n电阻{越小|red}"}}} />;
