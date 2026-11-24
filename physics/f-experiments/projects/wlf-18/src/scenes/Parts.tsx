import React from 'react';
import {AutoScene} from '../components/auto';

export const Parts: React.FC = () => <AutoScene k="parts" d={{"tag": "考点七", "title": "装置的组成", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "控制电路", "at": "c1", "lines": ["含{敏感元件}"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "工作电路", "at": "c2", "lines": ["含{被控制用电器}"], "c": "orange", "size": 34}]}]}, {"t": "chain", "steps": [{"at": "c3", "text": "电阻 / 通断变化"}, {"at": "c4", "text": "电流、电压变化", "c": "orange"}, {"at": "c4", "text": "{执行元件动作}"}], "arrows": []}], "callout": {"label": "要点", "at": "c5", "text": "敏感元件 → 控制电路 → {执行元件}"}}} />;
