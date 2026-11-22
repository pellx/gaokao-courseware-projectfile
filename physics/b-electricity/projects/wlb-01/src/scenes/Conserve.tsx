import React from 'react';
import {AutoScene} from '../components/auto';

export const Conserve: React.FC = () => <AutoScene k="conserve" d={{"tag": "考点四", "title": "电荷守恒定律", "blocks": [{"t": "big", "at": "s1", "text": "电荷{不会创生}，{也不会消灭}", "size": 44}, {"t": "items", "items": [{"at": "s2", "text": "物体 → 物体"}, {"at": "s2", "text": "物体的一部分 → 另一部分"}], "size": 32}, {"t": "rule", "tag": "守恒", "at": "s3", "text": "转移过程中电荷{总量不变}", "c": "red", "size": 34}], "callout": {"label": "要点", "at": "s4", "text": "孤立系统：电荷{代数和不变}"}}} />;
