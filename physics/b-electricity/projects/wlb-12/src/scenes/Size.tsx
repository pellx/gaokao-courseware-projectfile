import React from 'react';
import {AutoScene} from '../components/auto';

export const Size: React.FC = () => <AutoScene k="size" d={{"tag": "考点三", "title": "安培力的大小", "blocks": [{"t": "big", "at": "c3", "text": "F = {IlB sinθ}", "size": 60}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "I ⊥ B", "at": "c1", "lines": ["F = {IlB}", "最大"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "I ∥ B", "at": "c2", "lines": ["F = {0}"], "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "c4", "text": "l 是导线在磁场中的{有效长度}"}}} />;
