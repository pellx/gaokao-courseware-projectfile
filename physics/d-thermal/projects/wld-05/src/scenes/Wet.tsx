import React from 'react';
import {AutoScene} from '../components/auto';

export const Wet: React.FC = () => <AutoScene k="wet" d={{"tag": "考点七", "title": "浸润和不浸润", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "浸润", "at": "w2", "text": "水 — {玻璃}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "不浸润", "at": "w2", "text": "水银 — {玻璃|orange}", "c": "orange", "size": 32}]}]}, {"t": "text", "at": "w3", "text": "水银浸润{铅}；水不浸润{荷叶|orange}", "size": 34}], "callout": {"label": "要点", "at": "w4", "text": "取决于{液体和固体}两者"}}} />;
