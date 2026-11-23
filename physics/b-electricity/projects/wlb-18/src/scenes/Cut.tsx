import React from 'react';
import {AutoScene} from '../components/auto';

export const Cut: React.FC = () => <AutoScene k="cut" d={{"tag": "考点四", "title": "导线切割磁感线", "blocks": [{"t": "big", "at": "d2", "text": "E = {Blv}", "size": 60}, {"t": "rule", "tag": "有夹角", "at": "d3", "text": "E = {Blv sinθ}", "c": "orange", "size": 34}], "callout": {"label": "要点", "at": "d4", "text": "v ∥ B 时 {E = 0}"}}} />;
