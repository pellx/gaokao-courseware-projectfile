import React from 'react';
import {AutoScene} from '../components/auto';

export const Hall: React.FC = () => <AutoScene k="hall" d={{"tag": "考点七", "title": "霍尔元件", "blocks": [{"t": "chain", "steps": [{"at": "h1", "text": "电流 I + 磁场 B"}, {"at": "h2", "text": "洛伦兹力偏转", "c": "orange"}, {"at": "h2", "text": "{霍尔电压}"}], "arrows": []}, {"t": "big", "at": "h3", "text": "{U_H = k IB/d}", "size": 60}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "结构", "at": "h1", "lines": ["通电{半导体薄片}", "磁场垂直于薄片"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "霍尔电压", "at": "h3", "lines": ["与 I、B 都垂直", "I 一定时与 B {成正比}"], "c": "red", "size": 32}]}]}], "callout": {"label": "要点", "at": "h4", "text": "磁感应强度 → {电压}"}}} />;
