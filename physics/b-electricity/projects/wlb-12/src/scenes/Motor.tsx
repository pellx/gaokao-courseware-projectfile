import React from 'react';
import {AutoScene} from '../components/auto';

export const Motor: React.FC = () => <AutoScene k="motor" d={{"tag": "考点七", "title": "电动机与能量转化", "blocks": [{"t": "rule", "tag": "原理", "at": "g1", "text": "通电线圈在磁场中受{安培力}而转动", "c": "red", "size": 32}, {"t": "chain", "steps": [{"at": "g3", "text": "电能", "c": "orange"}, {"at": "g2", "text": "安培力做正功", "c": "red"}, {"at": "g3", "text": "机械能", "c": "orange"}], "arrows": []}], "callout": {"label": "要点", "at": "g3", "text": "电动机：电能 → {机械能}"}, "beat": {"k": "push", "at": "g2b", "text": "安培力做正功\n{推着线圈转|red}"}}} />;
