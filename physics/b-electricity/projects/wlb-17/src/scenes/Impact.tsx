import React from 'react';
import {AutoScene} from '../components/auto';

export const Impact: React.FC = () => <AutoScene k="impact" d={{"tag": "考点五", "title": "电磁感应的应用与影响", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "发电机", "at": "e1", "lines": ["机械能 → {电能}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "变压器", "at": "e2", "lines": ["改变{交流电压}"], "c": "orange", "size": 32}]}]}, {"t": "rule", "tag": "影响", "at": "e3", "text": "人类进入{电气时代}", "c": "red", "size": 34}], "callout": {"label": "要点", "at": "e4", "text": "电磁感应开启{电气时代}"}}} />;
