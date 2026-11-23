import React from 'react';
import {AutoScene} from '../components/auto';

export const NoWork: React.FC = () => <AutoScene k="nowork" d={{"tag": "考点四", "title": "洛伦兹力不做功", "blocks": [{"t": "big", "at": "d1", "text": "F {⊥} v", "size": 60}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "改变", "at": "d2", "lines": ["速度{方向}"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "不改变", "at": "d2", "lines": ["速度大小、{动能}"], "c": "orange", "size": 34}]}]}], "callout": {"label": "要点", "at": "d3", "text": "洛伦兹力{不做功}"}}} />;
