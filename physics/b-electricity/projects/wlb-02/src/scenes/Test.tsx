import React from 'react';
import {AutoScene} from '../components/auto';

export const Test: React.FC = () => <AutoScene k="test" d={{"tag": "考点二", "title": "试探电荷与场源电荷", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "试探电荷", "at": "t2", "lines": ["电荷量充分小", "尺寸充分小", "不影响原电场"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "场源电荷", "at": "t3", "lines": ["激发电场的电荷"], "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "t4", "text": "试探电荷只是{探测器}"}}} />;
