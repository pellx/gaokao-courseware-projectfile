import React from 'react';
import {AutoScene} from '../components/auto';

export const Discover: React.FC = () => <AutoScene k="discover" d={{"tag": "考点一", "title": "划时代的发现", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "奥斯特 1820 年", "at": "a1", "lines": ["电流的磁效应", "{电生磁}"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "法拉第 1831 年", "at": "a2", "lines": ["电磁感应现象", "{磁生电}"], "c": "red", "size": 32}]}]}, {"t": "rule", "tag": "定义", "at": "a3", "text": "磁生电叫{电磁感应}，产生的电流叫{感应电流}", "c": "red", "size": 32}], "callout": {"label": "要点", "at": "a4", "text": "法拉第发现{磁生电}"}}} />;
