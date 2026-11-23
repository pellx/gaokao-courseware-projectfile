import React from 'react';
import {AutoScene} from '../components/auto';

export const Plant: React.FC = () => <AutoScene k="plant" d={{"tag": "考点四", "title": "核电站", "blocks": [{"t": "chain", "steps": [{"at": "d1", "text": "核能"}, {"at": "d1", "text": "内能", "c": "orange"}, {"at": "d2", "text": "机械能", "c": "orange"}, {"at": "d2", "text": "电能"}], "arrows": []}, {"t": "text", "at": "d3", "text": "防止放射性泄漏，{妥善处理}核废料", "size": 36}], "callout": {"label": "要点", "at": "d4", "text": "核能 → 内能 → 机械能 → {电能}"}}} />;
