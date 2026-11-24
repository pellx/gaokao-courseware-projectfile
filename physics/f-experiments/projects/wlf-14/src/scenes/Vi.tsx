import React from 'react';
import {AutoScene} from '../components/auto';

export const Vi: React.FC = () => <AutoScene k="vi" d={{"tag": "考点六", "title": "测电压和电流", "blocks": [{"t": "rule", "tag": "机械调零", "at": "f1", "text": "指针不在左端零刻度　→　调{指针定位螺丝}", "c": "red", "size": 34}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "测电压", "at": "f2", "lines": ["与被测元件{并联}", {"at": "f3", "text": "红表笔接{高电势}"}], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "测电流", "at": "f2", "lines": ["{串联}接入电路", {"at": "f3", "text": "红表笔接{高电势}"}], "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "f4", "text": "电压{并联}、电流{串联}，红接高电势"}}} />;
