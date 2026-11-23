import React from 'react';
import {AutoScene} from '../components/auto';

export const Magnet: React.FC = () => <AutoScene k="magnet" d={{"tag": "考点一", "title": "磁现象与我国古代成就", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "a2", "text": "同名相{斥}", "size": 46}]}, {"blocks": [{"t": "big", "at": "a2", "text": "异名相{吸|orange}", "size": 46, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "rule", "tag": "古代", "at": "a3", "text": "司南、指南针；沈括记载{磁偏角}", "c": "red", "size": 32}, {"t": "rule", "tag": "现代", "at": "a4", "text": "电磁铁、磁记录、{磁悬浮列车}", "c": "orange", "size": 32}], "callout": {"label": "要点", "at": "a5", "text": "沈括《梦溪笔谈》：{磁偏角}"}}} />;
